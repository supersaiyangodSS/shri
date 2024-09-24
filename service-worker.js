const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/index.html',  // Add your essential files here
  '/styles.css',
  '/script.js',
  '/images/logo.png'
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
