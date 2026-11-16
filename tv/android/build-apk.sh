#!/bin/sh
# Construit MozaWorld-TV.apk sans Android Studio (Ubuntu : apt install aapt apksigner dalvik-exchange android-sdk-platform-23 zipalign).
set -e
cd "$(dirname "$0")"
SDK=/usr/lib/android-sdk/platforms/android-23/android.jar
[ -f "$SDK" ] || SDK=$(ls /usr/lib/android-sdk/platforms/*/android.jar | head -1)
rm -rf out && mkdir -p out/classes out/apk
# 1. Page du jeu hors ligne : Three.js et polices embarqués, rien à télécharger sur la télé
( cd .. && sh build.sh >/dev/null )
sed -e 's|<link rel="stylesheet" href="https://fonts.googleapis.com[^>]*>|<link rel="stylesheet" href="polices.css">|' \
    -e 's|https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js|three.min.js|' ../index.html > assets/index.html
grep -q 'googleapis\|cdnjs' assets/index.html && { echo "lien externe restant"; exit 1; }
# 2. Code Java -> dex
mkdir -p out/stubs && javac --release 8 -nowarn -cp "$SDK" -d out/stubs stubs/android/webkit/*.java
javac --release 8 -nowarn -cp "$SDK:out/stubs" -d out/classes src/com/mozaworld/tv/*.java 2>&1 | grep -v "warning\|JAVA_TOOL" || true
dalvik-exchange --dex --output=out/apk/classes.dex out/classes
# 3. Ressources + manifeste + assets
aapt package -f -M AndroidManifest.xml -S res -A assets -I "$SDK" -F out/base.apk -0 arsc
( cd out/apk && zip -q ../base.apk classes.dex )
# 4. Alignement et signature (clé de démonstration, gardée dans le dépôt pour que les mises à jour s'installent par-dessus)
[ -f mozaworld.keystore ] || keytool -genkeypair -keystore mozaworld.keystore -storepass mozaworld -keypass mozaworld \
   -alias mozaworld -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=MozaWorld" >/dev/null 2>&1
zipalign -f -p 4 out/base.apk out/aligned.apk
apksigner sign --ks mozaworld.keystore --ks-pass pass:mozaworld --key-pass pass:mozaworld --out MozaWorld-TV.apk out/aligned.apk
apksigner verify --print-certs MozaWorld-TV.apk | head -1
ls -la MozaWorld-TV.apk
