// Vidyamandir Service Worker — v3
// Cache strategy: cache-first for static assets, network-first for HTML, pass-through for ICP/API

const CACHE_NAME = 'vidyamandir-v3';

// Critical shell assets to pre-cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  '/icon-192.png',
  '/icon-512.png',
];

// Static file extensions — cache-first
const STATIC_EXTENSIONS = /\.(js|css|png|jpg|jpeg|svg|ico|woff|woff2|ttf|webp|gif|avif)(\?.*)?$/;

// ICP / Internet Computer origins — always pass-through, never cache
function isIcpRequest(url) {
  return (
    url.pathname.startsWith('/api/') ||
    url.hostname.includes('icp') ||
    url.hostname.includes('ic0.app') ||
    url.hostname.includes('raw.ic0.app') ||
    url.hostname.includes('internetcomputer.org')
  );
}

// ─── INSTALL ─────────────────────────────────────────────────────────────────
// Pre-cache all critical shell assets so the app works offline immediately.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_ASSETS).catch((err) => {
          // Non-fatal: some assets may not exist yet during first deploy
          console.warn('[SW] Pre-cache partial failure (non-fatal):', err);
        });
      })
      // Do NOT skipWaiting here — wait for SKIP_WAITING message so the
      // page can show an "update ready" prompt first.
  );
});

// ─── ACTIVATE ────────────────────────────────────────────────────────────────
// Delete every cache whose name doesn't match the current version.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            })
        )
      )
      .then(() => self.clients.claim())
  );
});

// ─── MESSAGE HANDLER ─────────────────────────────────────────────────────────
// Allow the page to trigger immediate activation after user consent.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] SKIP_WAITING received — activating immediately');
    self.skipWaiting();
  }
});

// ─── FETCH ───────────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only intercept GET requests
  if (request.method !== 'GET') return;

  // ICP/API calls — always pass through without caching
  if (isIcpRequest(url)) return;

  // Only handle same-origin requests beyond this point
  if (url.origin !== self.location.origin) return;

  // ── Cache-first: static assets (JS, CSS, images, fonts) ──────────────────
  if (STATIC_EXTENSIONS.test(url.pathname)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches
                .open(CACHE_NAME)
                .then((cache) => cache.put(request, clone))
                .catch(() => {/* non-fatal */});
            }
            return response;
          })
          .catch(() => {
            // Return a transparent 1×1 PNG for image requests when offline
            if (/\.(png|jpg|jpeg|webp|gif|avif|svg)(\?.*)?$/.test(url.pathname)) {
              return new Response(
                '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }
            return new Response('Offline', { status: 503 });
          });
      })
    );
    return;
  }

  // ── Network-first: HTML / navigation requests ─────────────────────────────
  if (request.mode === 'navigate' || request.headers.get('Accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(request, clone))
              .catch(() => {/* non-fatal */});
          }
          return response;
        })
        .catch(async () => {
          // Offline fallback: return cached page or shell index.html
          const cached =
            (await caches.match(request)) ||
            (await caches.match('/index.html')) ||
            (await caches.match('/'));
          return (
            cached ||
            new Response('<h1>Offline</h1><p>Please check your connection.</p>', {
              headers: { 'Content-Type': 'text/html' },
              status: 503,
            })
          );
        })
    );
    return;
  }
});

// ─── BACKGROUND SYNC ─────────────────────────────────────────────────────────
// Stub: retry queued offline form submissions (enquiries, orders) when back online.
self.addEventListener('sync', (event) => {
  if (event.tag === 'vidyamandir-enquiry-sync') {
    console.log('[SW] Background sync: retrying offline enquiry submissions');
    event.waitUntil(
      // TODO: read queued submissions from IndexedDB and POST them
      Promise.resolve()
    );
  }

  if (event.tag === 'vidyamandir-order-sync') {
    console.log('[SW] Background sync: retrying offline order submissions');
    event.waitUntil(
      // TODO: read queued orders from IndexedDB and POST them
      Promise.resolve()
    );
  }
});

// ─── PUSH NOTIFICATIONS ──────────────────────────────────────────────────────
// Stub: handle push messages from the server (new offers, order updates, etc.)
self.addEventListener('push', (event) => {
  let data = {
    title: 'Vidyamandir — বিদ্যামন্দির',
    body: 'You have a new notification from Vidyamandir.',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'vidyamandir-notification',
    data: { url: '/' },
  };

  if (event.data) {
    try {
      const payload = event.data.json();
      data = { ...data, ...payload };
    } catch {
      data.body = event.data.text() || data.body;
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      tag: data.tag,
      data: data.data,
      vibrate: [200, 100, 200],
      requireInteraction: false,
      actions: [
        { action: 'open', title: 'Open App' },
        { action: 'dismiss', title: 'Dismiss' },
      ],
    })
  );
});

// Handle notification click — open the relevant page
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        // If the app is already open, focus it and navigate
        for (const client of windowClients) {
          if ('focus' in client) {
            client.focus();
            client.navigate(targetUrl);
            return;
          }
        }
        // Otherwise open a new window
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
  );
});
