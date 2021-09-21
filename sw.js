
var cacheName = 'NomeApp-v';
var filesToCache = [
    './',
    './index.html',
    './manifest.json'
];
self.addventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});
self.addventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(reponse) {
            return response || fetch(e.request);
        })
    );
});