const CACHE_NAME = 'cool-cache';

// Add whichever assets you want to precache here:
const PRECACHE_ASSETS = [
  './index.html',

  './assets/css/main.css',

  './assets/css/noscript.css',

  './assets/js/jquery.min.js',

  './assets/js/browser.min.js',

  './assets/js/breakpoints.min.js',

  './assets/js/util.js',

  './assets/js/main.js',

  './img/180.png',
  './img/appstore.png',
  './img/bg.jpg',
  './img/invest.jpg',
  './img/invest2.jpg',
  './img/invest3.jpg',
  './img/overlay.jpg',
  './img/pic02.jpg',
  './img/pic03.jpg',
  './img/playstore.png',
  './img/simbolo-de-setas-duplas-para-a-direita-para-avancar.png',
  './img/formulas.JPG'
]

// Listener for the install event - precaches our assets list on service worker install.
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(PRECACHE_ASSETS);
    })());
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(async () => {
      const cache = await caches.open(CACHE_NAME);

      // match the request to our cache
      const cachedResponse = await cache.match(event.request);

      // check if we got a valid response
      if (cachedResponse !== undefined) {
          // Cache hit, return the resource
          return cachedResponse;
      } else {
        // Otherwise, go to the network
          return fetch(event.request)
      };
  });
});