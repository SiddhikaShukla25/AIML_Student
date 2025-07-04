const CACHE_NAME = 'aiml-portfolio-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'main.js',
  'manifest.json',
  'AIML_Student/award.png',
  'AIML_Student/document.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
