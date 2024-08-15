// service-worker.js
const CACHE_NAME = 'offline-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/*.css',
  '/js/*.js',
  '/images/*.jpg',
  '/sound/*.mp3'
];

// Cài đặt service worker và lưu cache các tệp
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Xử lý các yêu cầu mạng
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Nếu có cache, trả về từ cache, nếu không thì yêu cầu từ mạng
        return response || fetch(event.request);
      })
  );
});

// Kích hoạt và xóa cache cũ nếu có phiên bản mới
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
