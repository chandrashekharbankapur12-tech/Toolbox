const CACHE_NAME = 'toolbox-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Naye version ko turant apply karne ke liye
});

self.addEventListener('fetch', (event) => {
  // Offline support ke liye basic fetch logic
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
