import subprocess, math, sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
W,H,FPS=1920,1080,30
S='/mnt/project-files/presentation/captures-hd/'
F='/tmp/claude-0/-home-user/3470fe56-8aa9-521e-9e5b-c7c780637da7/scratchpad/fonts/'
TIT=lambda s:ImageFont.truetype(F+'cormorant-garamond-latin-600-normal.ttf',s)
ITA=lambda s:ImageFont.truetype(F+'cormorant-garamond-latin-500-italic.ttf',s)
TXT=lambda s:ImageFont.truetype(F+'jost-latin-500-normal.ttf',s)
OR=(232,199,127); IV=(239,231,214)
cache={}
def img(n):
  if n not in cache:
    p='/mnt/project-files/minicarte/carte-du-monde-types.png' if n=='carte' else S+n+'.png'
    cache[n]=Image.open(p).convert('RGB').resize((W,H))
  return cache[n]
def kb(n,t,z0=1.0,z1=1.08,dx=0,dy=0):
  im=img(n); z=z0+(z1-z0)*t
  w,h=W/z,H/z; cx=W/2+dx*t*(W-w)/2; cy=H/2+dy*t*(H-h)/2
  return im.crop((int(cx-w/2),int(cy-h/2),int(cx+w/2),int(cy+h/2))).resize((W,H),Image.BILINEAR)
def ease(x): x=max(0,min(1,x)); return x*x*(3-2*x)
def vign(fr,a=0.55):
  if 'v' not in cache:
    m=Image.new('L',(W,H),0); d=ImageDraw.Draw(m)
    for i in range(60): d.rectangle((i*8,i*5,W-i*8,H-i*5),fill=int(255*(i/60)))
    cache['v']=m.filter(ImageFilter.GaussianBlur(80))
  dark=Image.new('RGB',(W,H),(8,7,10))
  return Image.composite(fr,Image.blend(fr,dark,a),cache['v'])
def bas(fr,h=360,a=0.8):
  if ('b',h) not in cache:
    m=Image.new('L',(1,H),0)
    for y in range(H): m.putpixel((0,y),int(255*max(0,(y-(H-h))/h)**1.3))
    cache[('b',h)]=m.resize((W,H))
  return Image.composite(Image.new('RGB',(W,H),(8,7,10)),fr,cache[('b',h)].point(lambda v:int(v*a)))
def texte(fr,lignes,alpha,y=None):
  if alpha<=0: return fr
  ov=Image.new('RGBA',(W,H),(0,0,0,0)); d=ImageDraw.Draw(ov)
  tot=sum(f.size*1.25 for _,f,_ in lignes); yy=y if y is not None else (H-tot)/2
  for s,f,c in lignes:
    if s=='—':
      d.line((W/2-160,yy+f.size*0.6,W/2+160,yy+f.size*0.6),fill=OR+(int(200*alpha),),width=2)
      cx,cy=W/2,yy+f.size*0.6; d.polygon([(cx,cy-9),(cx+9,cy),(cx,cy+9),(cx-9,cy)],outline=OR+(int(255*alpha),),fill=(8,7,10,int(255*alpha)))
    else:
      bb=d.textbbox((0,0),s,font=f); x=(W-(bb[2]-bb[0]))/2
      d.text((x+2,yy+3),s,font=f,fill=(0,0,0,int(160*alpha)))
      d.text((x,yy),s,font=f,fill=c+(int(255*alpha),))
    yy+=f.size*1.25
  return Image.alpha_composite(fr.convert('RGBA'),ov).convert('RGB')
def etiquette(fr,s,alpha):
  if alpha<=0: return fr
  ov=Image.new('RGBA',(W,H),(0,0,0,0)); d=ImageDraw.Draw(ov); f=TXT(30)
  bb=d.textbbox((0,0),s,font=f); w=bb[2]-bb[0]
  d.rectangle((70,70,70+w+48,70+64),fill=(8,7,10,int(190*alpha)),outline=OR+(int(220*alpha),),width=2)
  d.text((94,80),s,font=f,fill=IV+(int(255*alpha),))
  return Image.alpha_composite(fr.convert('RGBA'),ov).convert('RGB')
NOIR=Image.new('RGB',(W,H),(8,7,10))
plans=[]  # (durée, fonction(t, sec))
def P(d,f): plans.append((d,f))
fondu=lambda sec,d,e=0.6: min(ease(sec/e),ease((d-sec)/e))
# 1 Titre
P(3.5,lambda t,s:texte(NOIR,[('MOZAWORLD',TIT(170),IV),('—',TIT(30),OR),('La mosaïque Girih',ITA(56),OR)],fondu(s,3.5,0.9)))
# 2 Carte
P(4.5,lambda t,s:Image.blend(NOIR,texte(bas(kb('carte',t,1.15,1.35,0.1,0.05),420),[('Un monde taillé dans une mosaïque Girih',TIT(72),IV),('925 zones, cinq types de tuiles, pas un trou',TXT(34),OR)],ease((s-0.8)/0.8),y=830),fondu(s,4.5)))
# 3 accroche
P(3,lambda t,s:texte(NOIR,[('Chaque zone peut basculer',TIT(96),IV),('de −7 à +7',ITA(64),OR)],fondu(s,3,0.7)))
# 4 séquences de bascule
def bascule(z,nom,d=7.5,ims=('m7','0','p7'),labs=('−7','0','+7')):
  def f(t,s):
    k=len(ims); seg=d/k; i=min(int(s/seg),k-1); u=(s-i*seg)/seg
    fr=kb(f'{z}_{ims[i]}',t,1.02,1.12,0.2,-0.1)
    if i+1<k and u>0.8: fr=Image.blend(fr,kb(f'{z}_{ims[i+1]}',t,1.02,1.12,0.2,-0.1),ease((u-0.8)/0.2))
    fr=vign(fr,0.45); fr=etiquette(fr,f'{nom}   ·   niveau {labs[i]}',ease(s/0.5))
    return Image.blend(NOIR,fr,fondu(s,d,0.5))
  P(d,f)
bascule('DON045','Donjon',6.3)
bascule('DON','Donjon des braises',4.6,('m7','p7'),('−7','+7'))
bascule('CIT','Citadelle de Berestograd',4.6,('m7','p7'),('−7','+7'))
bascule('ANT','Antre des lucioles',4.6,('m7','p7'),('−7','+7'))
# 5 montage rapide
rapides=[('ASS152_p7','Assemblée · +7'),('MAR_p7','Assemblée · +7'),('ANT120_m7','Antre · −7'),('RES374_p7','Ressource · +7')]
def mont(t,s):
  i=min(int(s/1.5),3); u=(s-i*1.5)/1.5
  fr=vign(kb(rapides[i][0],u,1.0,1.1,-0.2,0),0.4); fr=etiquette(fr,rapides[i][1],1)
  return Image.blend(NOIR,fr,fondu(s,6,0.3))
P(6,mont)
# 6 exploration / combat
P(4.5,lambda t,s:Image.blend(NOIR,texte(bas(kb('interface',t,1.0,1.06),300,0.85),[('Prenez chaque zone, une à une',TIT(68),IV)],ease((s-0.5)/0.6),y=960),fondu(s,4.5)))
P(5,lambda t,s:Image.blend(NOIR,texte(bas(kb('combat',t,1.0,1.06,0,-0.3),300,0.9),[('Combattez avec les cartes de vos conquêtes',TIT(64),IV)],ease((s-0.5)/0.6),y=965),fondu(s,5)))
# 7 fin
def fin(t,s):
  fr=Image.blend(NOIR,vign(kb('DON045_p7',t,1.1,1.0),0.2),0.32)
  fr=texte(fr,[('MOZAWORLD',TIT(160),IV),('—',TIT(30),OR),('Le monde est une mosaïque. Chaque tuile peut basculer.',ITA(50),OR),(' ',TXT(30),IV),('Jouable dans le navigateur',TXT(34),IV),('mikeconseil-rgb.github.io/MozaWorld',TXT(34),OR)],ease(s/1.0))
  return Image.blend(NOIR,fr,min(1,ease((6-s)/1.2)))
P(6,fin)
tot=sum(d for d,_ in plans); print('durée',tot,file=sys.stderr)
out=sys.argv[1]; apercu='--apercu' in sys.argv
cmd=['ffmpeg','-y','-loglevel','error','-f','rawvideo','-pix_fmt','rgb24','-s',f'{W}x{H}','-r',str(FPS),'-i','-',
 '-f','lavfi','-i',f"aevalsrc='0.10*sin(2*PI*55*t)+0.07*sin(2*PI*82.4*t)+0.05*sin(2*PI*110*t)*(0.6+0.4*sin(2*PI*0.1*t))+0.035*sin(2*PI*164.8*t)*(0.5+0.5*sin(2*PI*0.07*t))+0.02*sin(2*PI*220*t)*(0.5+0.5*sin(2*PI*0.13*t))':s=48000:d={tot}",
 '-filter_complex','[1:a]aecho=0.8:0.7:400|900:0.35|0.2,lowpass=f=1800,afade=t=in:d=2,afade=t=out:st=%s:d=3,volume=1.6[a]'%(tot-3),
 '-map','0:v','-map','[a]','-c:v','libx264','-preset','medium','-crf','19','-pix_fmt','yuv420p','-c:a','aac','-b:a','160k','-shortest','-movflags','+faststart',out]
if apercu:
  t0=0
  for k,(d,f) in enumerate(plans):
    f(0.5,d/2).resize((960,540)).save(out.replace('.mp4',f'-{k}.jpg')); 
  sys.exit()
p=subprocess.Popen(cmd,stdin=subprocess.PIPE)
for d,f in plans:
  n=int(round(d*FPS))
  for i in range(n): p.stdin.write(f(i/n,i/FPS).tobytes())
p.stdin.close(); p.wait()
