'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "854cebb3ba7add36c212c0eaa0688f37",
"assets/AssetManifest.bin.json": "e609d97f14134ed789d2fcc1045cff39",
"assets/AssetManifest.json": "c5aebcab0af805a79653c24da7ffea83",
"assets/assets/fonts/Ultima%2520Alt%2520Bold.ttf": "dcfbf60be313ed7cae654ac75c0c7f81",
"assets/assets/fonts/Ultima%2520Alt%2520Light.ttf": "3ec4459fdf7dc7e57425b9d1f23ca47f",
"assets/assets/fonts/Ultima%2520Alt.ttf": "4cee3e0fa6b39a261d3a91b322b5d69a",
"assets/assets/fonts/Ultima%2520Black.ttf": "d3e8235981c8cd008f26ed5230744c08",
"assets/assets/fonts/Ultima%2520Bold%2520Italic.ttf": "7c6c2ee04a55c092de7a1b54671364f4",
"assets/assets/fonts/Ultima%2520Bold.ttf": "a9a78819edfec61d1323d8ac7f372dae",
"assets/assets/fonts/Ultima%2520Italic.ttf": "a5e16966a6e2b710b310280961efcc8d",
"assets/assets/fonts/Ultima%2520Light%2520Italic.ttf": "c6faea15cc176c33585b9e248ccf5aff",
"assets/assets/fonts/Ultima%2520Light.ttf": "db0131b6cfe0d9204d8287de72922128",
"assets/assets/fonts/Ultima.ttf": "efdb72365839f99b209d4814429b728c",
"assets/assets/img/aproved.png": "96ca0df7622ae615ca07c9b06e942b79",
"assets/assets/img/biopuntov.png": "dc41172ad354d7efe5acdacf5ddc5a1e",
"assets/assets/img/c2p.png": "3213ec21e7406ff3f7ae2612c88f8f00",
"assets/assets/img/combini_logo.jpg": "a0f2bac6a2df75ccc86b53eb19d74478",
"assets/assets/img/logo_sitef.png": "23fdf5f87bcb126003755f553e03ef7a",
"assets/assets/img/nescafe_capuchino.jpg": "4b53cff142925e924b88608be66ebe56",
"assets/assets/img/nescafe_latte.jpg": "b9cd371753482c4c191cfc741a7c25cb",
"assets/assets/img/nescafe_moca.jpg": "40dd079ab8c964d7cf12b6ac9bb484b3",
"assets/assets/img/puntodeventa.jpg": "481a0ead2585e4702c77f53285527c7e",
"assets/assets/img/puntov_logo_trim.png": "22f78d2c501eb8a6e41aa4a8e75f79bd",
"assets/assets/img/puntov_log_negro.png": "abaa4fc36200778c12dd098776d3f3d7",
"assets/assets/img/puntov_wallet.png": "d5ca6a3a109ebf4bd4215bdcfcadb308",
"assets/assets/img/r4.png": "17a7386c42193d45ca885a9119fbead5",
"assets/assets/img/recibo_blanco.png": "0f4343dfa6a075660aaad219e5ef8590",
"assets/assets/img/retirar_producto.jpg": "a1ae16f504d29ff7cef1beb7669a9167",
"assets/assets/img/sitef_c2p.png": "f5992e47a2024ac1b8f71127e5c3a929",
"assets/assets/img/sitef_tarjeta.png": "51d2ed055de2d7c42e97c19d4da8a190",
"assets/assets/img/vending.jpg": "09000a1f03134919b714fe25dc9b5eaa",
"assets/assets/img/vendu_logo.jpg": "386369c562c931abc9655592626a1715",
"assets/assets/img/warning.gif": "70584b7a6c3869052d61ae59dcbf9632",
"assets/FontManifest.json": "150b99d07517b98a97fed2cd8ecb6289",
"assets/fonts/MaterialIcons-Regular.otf": "078af309f36a181670501ae66e939181",
"assets/NOTICES": "cc2d78d3da412ac4f74707a7be32538f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "4e35bb71f1a5255b504308b73d0baaed",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7f8540a78fb14c7390042bc5048ea2d0",
"/": "7f8540a78fb14c7390042bc5048ea2d0",
"main.dart.js": "be4a6521ef56da7d7328ff7259ff2a44",
"manifest.json": "411241b7bd7f1b0492d5fea6e2b64164",
"version.json": "03aa92c484b46aed2e756d6d47ea1de6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
