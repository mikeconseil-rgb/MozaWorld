"""Ressemblance entre deux captures d'une même zone (0 % = rien en commun, 100 % = identiques).
Moitié couleurs (intersection d'histogrammes RVB 8x8x8), moitié structure (SSIM sur l'image en gris réduite à 200x112).
Usage : python3 ressemblance.py <dossier> [zones]  -> tableau -7/+7 et paliers voisins."""
import sys, numpy as np
from PIL import Image
def load(p):
    im=Image.open(p).convert('RGB').resize((200,112),Image.BILINEAR);return np.asarray(im,dtype=np.float64)/255
def hist(a):
    q=np.clip((a*8).astype(int),0,7);i=q[...,0]*64+q[...,1]*8+q[...,2];h=np.bincount(i.ravel(),minlength=512);return h/h.sum()
def box(x,r=3):
    k=2*r+1;c=np.cumsum(np.cumsum(np.pad(x,((r+1,r),(r+1,r)),mode='edge'),0),1)
    return (c[k:,k:]-c[:-k,k:]-c[k:,:-k]+c[:-k,:-k])/(k*k)
def ssim(a,b):
    a=a@[.299,.587,.114];b=b@[.299,.587,.114];C1,C2=.01**2,.03**2
    ma,mb=box(a),box(b);va=box(a*a)-ma*ma;vb=box(b*b)-mb*mb;cv=box(a*b)-ma*mb
    return float(np.mean(((2*ma*mb+C1)*(2*cv+C2))/((ma*ma+mb*mb+C1)*(va+vb+C2))))
def res(p,q):
    a,b=load(p),load(q);h=float(np.minimum(hist(a),hist(b)).sum());s=max(0.,ssim(a,b));return 100*(h+s)/2
if __name__=='__main__':
    d=sys.argv[1];zs=(sys.argv[2] if len(sys.argv)>2 else 'CIT,DON,RES,ANT,MAR').split(',')
    import os
    for z in zs:
        lv=sorted(int(f.split('_')[1][:-4]) for f in os.listdir(d) if f.startswith(z+'_'))
        if -7 in lv and 7 in lv: print(f"{z}  -7 / +7 : {res(f'{d}/{z}_-7.png',f'{d}/{z}_7.png'):.0f} %")
        adj=[(a,b,res(f'{d}/{z}_{a}.png',f'{d}/{z}_{b}.png')) for a,b in zip(lv,lv[1:])]
        print('   paliers voisins : '+'  '.join(f"{a:+d}>{b:+d} {r:.0f}%" for a,b,r in adj))
