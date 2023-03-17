var cacheName = 'Investeasy';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

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
        './img/formulas.JPG',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});