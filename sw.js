/* יפן 2026 — service worker: offline app shell. bump CACHE on each release. */
const CACHE = 'japan2026-v20260819b';
const SHELL = [
  './', './index.html', './styles.css', './app.js', './data.js', './manifest.json', './icon.svg',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => null)))));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // map tiles / weather API: network-first, no cache bloat
  if (/google\.com\/vt|open-meteo\.com/.test(url.href)) {
    e.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }
  // app shell + everything else: cache-first, fall back to network then cache the result
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      const copy = res.clone();
      if (res.ok && (url.origin === location.origin || /unpkg\.com|fonts\.(googleapis|gstatic)/.test(url.href))) {
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
