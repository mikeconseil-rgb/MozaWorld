package com.mozaworld.tv;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
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
