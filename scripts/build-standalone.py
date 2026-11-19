from pathlib import Path
import base64
root=Path(__file__).resolve().parents[1]
dist=root/'dist'
html=(dist/'index.html').read_text()
html=html.replace('<link rel="manifest" href="manifest.webmanifest">','')
icon='data:image/png;base64,'+base64.b64encode((dist/'icon.png').read_bytes()).decode()
html=html.replace('href="icon.png"',f'href="{icon}"')
html=html.replace('<link rel="stylesheet" href="style.css">','<style>\n'+(dist/'style.css').read_text()+'</style>')
html=html.replace('<script src="vendor/matter.min.js"></script>','<script id="physics-engine">'+(dist/'vendor/matter.min.js').read_text()+'</script>')
html=html.replace('<script src="vendor/three.min.js"></script>','<script id="three-engine">'+(dist/'vendor/three.min.js').read_text()+'</script>')
html=html.replace('<script src="fruit-3d.js"></script>','<script id="fruit-models">'+(dist/'fruit-3d.js').read_text()+'</script>')
s=(dist/'game.js').read_text().replace("if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});",'')
atlas='data:image/png;base64,'+base64.b64encode((dist/'assets/food-atlas-v1.png').read_bytes()).decode()
s=s.replace("const spriteAtlasSource='./assets/food-atlas-v1.png';",f"const spriteAtlasSource='{atlas}';")
knife='data:image/png;base64,'+base64.b64encode((dist/'assets/knife-v1.png').read_bytes()).decode()
s=s.replace("const knifeSpriteSource='./assets/knife-v1.png';",f"const knifeSpriteSource='{knife}';")
lying='data:image/png;base64,'+base64.b64encode((dist/'assets/lying-fruit-v1.png').read_bytes()).decode()
s=s.replace("const lyingSpriteSource='./assets/lying-fruit-v1.png';",f"const lyingSpriteSource='{lying}';")
peach='data:image/png;base64,'+base64.b64encode((dist/'assets/peach-lying-v1.png').read_bytes()).decode()
s=s.replace("const peachSpriteSource='./assets/peach-lying-v1.png';",f"const peachSpriteSource='{peach}';")
html=html.replace('<script type="module" src="game.js"></script>','<script id="game-source">\n'+s+'</script>')
(root.parent/'little-harvest.html').write_text(html)

(dist/'little-harvest.html').write_text(html)
