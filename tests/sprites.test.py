"""Verify sprite crops contain complete isolated food silhouettes, never uniform grid fragments."""
from pathlib import Path
import json,re
from PIL import Image
root=Path(__file__).resolve().parents[1]
image=Image.open(root/'dist/assets/food-atlas-v1.png')
w,h=image.size
mask=bytearray(a>90 for a in image.getchannel('A').tobytes())
regions=[]
for index in range(w*h):
    if not mask[index]: continue
    mask[index]=0
    pending=[index];count=0;left=w;top=h;right=bottom=0
    while pending:
        index=pending.pop();x=index%w;y=index//w;count+=1
        left=min(left,x);top=min(top,y);right=max(right,x);bottom=max(bottom,y)
        adjacent=([index-1] if x else [])+([index+1] if x<w-1 else [])+([index-w] if y else [])+([index+w] if y<h-1 else [])
        for neighbor in adjacent:
            if mask[neighbor]: mask[neighbor]=0;pending.append(neighbor)
    if count>200: regions.append((left,top,right-left+1,bottom-top+1))
data=json.loads(re.search(r'const foodSpriteData=(.*?);',(root/'dist/game.js').read_text()).group(1))
actual=[]
for entries in data.values():
    for entry in entries:
        box=entry.get('originalRect',entry['rect'])
        if 'leaves' in entry:
            leaf=entry['leaves'];l=min(box[0],leaf[0]);t=min(box[1],leaf[1])
            box=[l,t,max(box[0]+box[2],leaf[0]+leaf[2])-l,max(box[1]+box[3],leaf[1]+leaf[3])-t]
        actual.append(tuple(box))
assert len(regions)==24
assert sorted(actual)==sorted(regions),'Each crop must match one complete alpha silhouette'
print('PASS: all 24 crop rectangles contain whole food silhouettes without neighboring fragments')
