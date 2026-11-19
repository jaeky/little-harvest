const cacheName = 'little-harvest-v20';
const assets = ['./', './index.html', './style.css', './game.js', './manifest.webmanifest', './icon.png', './assets/food-atlas-v1.png', './assets/knife-v1.png', './assets/lying-fruit-v1.png', './assets/peach-lying-v1.png', './vendor/matter.min.js', './vendor/three.min.js', './fruit-3d.js'];
self.addEventListener('install', event => event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('little-harvest-') && key !== cacheName).map(key => caches.delete(key))))));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !assets.some(asset => new URL(asset, self.registration.scope).href === event.request.url)) return;
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
