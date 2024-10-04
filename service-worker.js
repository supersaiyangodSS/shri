const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/index.html',
    '/japa.html',
    '/privacy-policy.html',
    '/terms-and-conditions.html',
    '/stotra.html',
    '/swami-charitra-saramrit.html',
    '/pages/bhupali.html',
    '/pages/developer.html',
    '/pages/naivedya-arti-10.html', 
    '/pages/naivedya-arti-6.html',
    '/pages/veshesh-arti-12.html',
    '/public/css/index.css',
    '/public/css/input.css',
    '/public/css/style.css',
    '/public/js/mala.js',
    '/public/js/pages.js',
    '/public/js/script.js',
    '/public/js/stotra.js',
    '/public/js/swami.js',
    '/public/image/00000PORTRAIT_00000_BURST20220621163759015.jpg',
    '/public/image/1000051487.jpg',
    '/public/image/1000051607.jpg',
    '/public/image/1000071020.jpg',
    '/public/image/1000071024.jpg',
    '/public/image/cancel_48dp_FILL0_wght400_GRAD0_opsz48 (1).svg',
    '/public/image/rudraksh.png',
    '/public/image/shri.png',
];

// Install event: cache all the specified files
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event: serve files from cache if available, else fetch from network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // If cached file is found, return it; otherwise, fetch from network
                return response || fetch(event.request);
            })
    );
});

// Activate event: clean up old caches if any
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
