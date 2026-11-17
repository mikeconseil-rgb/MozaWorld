package com.mozaworld.tv;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.view.InputDevice;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import android.view.ViewGroup;
import android.webkit.JavascriptInterface;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/* Une fenêtre plein écran qui affiche le jeu embarqué (assets/index.html).
   Le bouton Retour de la télécommande ouvre le menu du jeu au lieu de quitter. */
public class MainActivity extends Activity {
    private WebView web;

    public class Pont {
        @JavascriptInterface
        public void quitter() {
            runOnUiThread(new Runnable() { public void run() { finish(); } });
        }
    }

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON | WindowManager.LayoutParams.FLAG_FULLSCREEN);
        creer();
        plein();
    }

    /* Si le moteur de rendu de la télé tombe (mémoire, carte graphique), on ne ferme pas l'appli :
       on recrée la vue et la partie reprend depuis la sauvegarde. */
    private class Client extends WebViewClient {
        public boolean onRenderProcessGone(WebView v, RenderProcessGoneDetail d) {
            if (v != web) return true;
            ViewGroup p = (ViewGroup) web.getParent();
            if (p != null) p.removeView(web);
            web.destroy();
            web = null;
            creer();
            return true;
        }
    }

    private void creer() {
        web = new WebView(this);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        web.setBackgroundColor(0xFF0D0C0F);
        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new Client());
        web.addJavascriptInterface(new Pont(), "Android");
        web.setFocusable(true);
        web.setFocusableInTouchMode(true);
        setContentView(web);
        web.loadUrl("file:///android_asset/index.html");
        web.requestFocus();
    }

    private void plein() {
        if (Build.VERSION.SDK_INT >= 19) {
            getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
        }
    }

    @Override
    public void onWindowFocusChanged(boolean f) { super.onWindowFocusChanged(f); if (f) plein(); }

    /* Manette (Xbox, etc.) : la WebView ne voit pas les sticks analogiques ; on relaie nous-mêmes
       les axes et les boutons à la page (window.MZpad), et on les garde pour que le système n'en fasse pas des flèches. */
    private float[] ax = new float[8];
    private static float lis(MotionEvent e, int a) { float v = e.getAxisValue(a); return Math.abs(v) < 0.12f ? 0f : v; }
    @Override
    public boolean dispatchGenericMotionEvent(MotionEvent e) {
        int src = e.getSource();
        if (web != null && e.getAction() == MotionEvent.ACTION_MOVE
            && ((src & InputDevice.SOURCE_JOYSTICK) == InputDevice.SOURCE_JOYSTICK || (src & InputDevice.SOURCE_GAMEPAD) == InputDevice.SOURCE_GAMEPAD)) {
            float lt = Math.max(lis(e, MotionEvent.AXIS_LTRIGGER), lis(e, MotionEvent.AXIS_BRAKE));
            float rt = Math.max(lis(e, MotionEvent.AXIS_RTRIGGER), lis(e, MotionEvent.AXIS_GAS));
            float[] n = { lis(e, MotionEvent.AXIS_X), lis(e, MotionEvent.AXIS_Y), lis(e, MotionEvent.AXIS_Z), lis(e, MotionEvent.AXIS_RZ),
                lt, rt, e.getAxisValue(MotionEvent.AXIS_HAT_X), e.getAxisValue(MotionEvent.AXIS_HAT_Y) };
            boolean ch = false;
            for (int i = 0; i < 8; i++) if (Math.abs(n[i] - ax[i]) > 0.02f || (n[i] == 0f && ax[i] != 0f)) ch = true;
            if (ch) {
                ax = n;
                StringBuilder b = new StringBuilder("window.MZpad&&MZpad.axes([");
                for (int i = 0; i < 8; i++) { if (i > 0) b.append(','); b.append(Math.round(n[i] * 1000) / 1000f); }
                web.evaluateJavascript(b.append("])").toString(), null);
            }
            return true;
        }
        return super.dispatchGenericMotionEvent(e);
    }
    private static String bouton(int k) {
        switch (k) {
            case KeyEvent.KEYCODE_BUTTON_A: return "a";
            case KeyEvent.KEYCODE_BUTTON_B: return "b";
            case KeyEvent.KEYCODE_BUTTON_X: return "x";
            case KeyEvent.KEYCODE_BUTTON_Y: return "y";
            case KeyEvent.KEYCODE_BUTTON_L1: return "lb";
            case KeyEvent.KEYCODE_BUTTON_R1: return "rb";
            case KeyEvent.KEYCODE_BUTTON_L2: return "lt";
            case KeyEvent.KEYCODE_BUTTON_R2: return "rt";
            case KeyEvent.KEYCODE_BUTTON_START: return "start";
            case KeyEvent.KEYCODE_BUTTON_SELECT: return "select";
            case KeyEvent.KEYCODE_BUTTON_THUMBL: return "ls";
            case KeyEvent.KEYCODE_BUTTON_THUMBR: return "rs";
            default: return null;
        }
    }
    @Override
    public boolean dispatchKeyEvent(KeyEvent e) {
        String n = bouton(e.getKeyCode());
        if (n != null && web != null) {
            if (e.getRepeatCount() == 0 && (e.getAction() == KeyEvent.ACTION_DOWN || e.getAction() == KeyEvent.ACTION_UP))
                web.evaluateJavascript("window.MZpad&&MZpad.btn('" + n + "'," + (e.getAction() == KeyEvent.ACTION_DOWN) + ")", null);
            return true;
        }
        return super.dispatchKeyEvent(e);
    }

    @Override
    public void onBackPressed() {
        if (web != null) web.evaluateJavascript("window.MZ&&MZ.act('back',false)", null);
    }

    @Override
    protected void onPause() { if (web != null) web.evaluateJavascript("window.MZ&&MZ.pause&&MZ.pause()", null); if (web != null) web.onPause(); super.onPause(); }

    @Override
    protected void onResume() { super.onResume(); if (web != null) web.onResume(); plein(); }

    @Override
    protected void onDestroy() { if (web != null) web.destroy(); super.onDestroy(); }
}
