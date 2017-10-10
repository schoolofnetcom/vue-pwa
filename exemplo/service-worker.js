let cacheName = 'conhecendo-service-workers';
let filesToCache = [
    '/',
    'index.html',
    'styles.css',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-128x128.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-144x144.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-152x152.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-192x192.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-256x256.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-512x512.png'
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Installer');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            console.log('[ServiceWorker] Get cache for ', e.request.url);
            return response || fetch(e.request);
        })
    );
});