// No-op service worker. Replaces the previous cache-first SW that pinned
// hashed bundle/asset names from the old Webpack build. On install it claims
// clients and unregisters itself so any browser holding the old SW gets a
// clean network-only experience after this deploys.
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
        await self.clients.claim();
        await self.registration.unregister();
    })());
});
