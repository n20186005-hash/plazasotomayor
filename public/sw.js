self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('plaza-sotomayor-')).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
