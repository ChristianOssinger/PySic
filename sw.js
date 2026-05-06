const CACHE = 'pysic-v1';
const FILES = [
  '/PySic/',
  '/PySic/index.html',
  '/PySic/PySic_Komplex.html',
  '/PySic/banner.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
