self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/index.html',
       '/uploading.gif',
       '/csv.html',
       '/sample.jpg',
       '/pic1.jpg',
       '/poptos.jpg',
       '/css/bootstrap.css',
       '/js/bootstrap.js',
       '/css/bootstrap.min.css',
       '/js/bootstrap.min.js',
       '/css/mdb.css',
       '/js/mdb.js',
       '/css/mdb.min.css',
       '/js/mdb.min.js',
       '/js/jquery-3.3.1.min.js',
       '/js/popper.min.js',
       '/css/style.min.css',
       '/css/style.css',
       '/images/icons/fox-icon.png',
       '/example.html'

     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});