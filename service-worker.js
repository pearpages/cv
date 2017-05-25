var cacheName = 'my-resume-v1';
var filesToCache = [
    '/',
    '/styles.css',
    '/media/pere-pages.jpg',
    '/bundle.js',
    '/af7ae505a9eed503f8b8e6982036873e.woff2',
    '/fonts/nBHdBv6zVNU8MtP6w9FwTRampu5_7CjHW5spxoeN3Vs.woff2',
    '/fonts/_P8jt3Y65hJ9c4AzRE0V1OvvDin1pK8aKteLpeZ5c0A.woff2',
    '/media/UOC.png',
    '/media/University-of-sheffield.png',
    '/media/icons/favicon-180.png',
    '/media/icons/favicon-192.png',
    '/media/icons/favicon-150.png',
    '/media/angular-beers.png',
    '/media/cinema-js.png',
    '/media/angularcamp-bcn.png',
    '/fonts/gk5FxslNkTTHtojXrkp-xMmDra0ONnO3FPH--kzkC5zr7w4p9aSvGirXi6XmeXNA.woff2',
    '/media/wefitter.png',
    '/media/alvaro-r-moya.jpg',
    '/media/tokio-marine.png',
    '/media/karine-lesueur.jpg',
    '/media/loris-candylaftis.jpg',
    '/media/putput.png',
    '/media/colleague.png',
    '/media/georgi-svetoslavov.jpg'
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install')
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }))
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});