'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "a8782c73f50690292aba2ccebc2b6236",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5543a5bb6077d1e921d163235b937925",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c3a55fd9bd266e15d37e98236b40fc2e",
".git/logs/refs/heads/main": "c3a55fd9bd266e15d37e98236b40fc2e",
".git/logs/refs/remotes/origin/main": "c6d98cfbb2b171c6c5445559f4bb807d",
".git/objects/17/31b3815e36327960ed7b9c8dce44fd73ade47c": "6cdfdbbe9c8d57eb58a0ce8b6da7edf0",
".git/objects/19/1f2119da84aa3c2ea35ebfa358aefb937daf70": "a58a328b2cbddb40501634cd4a231266",
".git/objects/1b/82d3d860f7384b0e28d3ba90fe26cb085d4495": "be9fdbe7fbbc5ad92a538bf6466a55f9",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/2c/443b74d549ab15ce77075bc9671e74135463bc": "8c06386b09bf397e58a3d7c473d34019",
".git/objects/2f/22e8ffd737bd72ddf356405a30832e7cf3716f": "715b89c0aa855d673f278f1e1cdfdea6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/e5f74fe964ab2f2a12ce1164d50a321e272493": "b228bb16b1e376944540074facea0faf",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/ee295c0b3e5b478133355127b91f71a80ddd74": "a1fa1de82b0a9b2690d42e815f05d82a",
".git/objects/48/5ecfe299619a6a885aa802e34690cb503c4049": "4fef9861265609897105a69f17af56a5",
".git/objects/4c/be077173f93626d8f332f5e5adc665296d79ce": "aa47d29e52ae0e9733dfcfc90b706549",
".git/objects/4e/6721b0697a0c5f2b7f9f3d93420dafc56b89bf": "914bb3a8c0d997573f8b8bc2ce00f860",
".git/objects/4e/91150b4a0539e624d0defee183a1f658a138e4": "2454c82d9f556be4243f3c0f17cb7a88",
".git/objects/52/fe36f66d0411bb0b4a571a68d14a094493ef7b": "c4fcc7094e2b69188cf06ea01926b842",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/be23b8d0f8d4e517185a67a70441f63ae16334": "bc0f8ca581babb97dbeaa2af5fbd8d3f",
".git/objects/5b/e4985bea437213fb473c6b0a347bd13f49f658": "2aaaf79a563d6d32b1909287cc0c195b",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/4ccc000ab46fac8bd6cda7c506efa228a759de": "f5395edc3f2ac3f5737ee0bace7491d6",
".git/objects/65/d1bc347fcba841087efcb43aeea7b9ff327cfb": "bc2c78d1ad8df4edf59ff79dbf285184",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/75/1fca1eab3d36ac135a0b627270ad2891ce5b48": "17ad29a1daf16e8cc8124c66863b472b",
".git/objects/76/491cec07addf91f3aa4fe24b334b7f8ae3555f": "ff932248b3c1eef14c09de7636940a85",
".git/objects/7c/776e5228f9106f39e38ad48d800151339989f3": "c0177c26e01a8e81a9f6eca961565052",
".git/objects/82/83295d13f60ce6ba1e07bd434234de1158b821": "e8d3157eeff80687ab936f12160ad712",
".git/objects/87/898b4010fa22923e0691ce7ed2c09664361668": "26d4d41d3b4a32e30f7db7c75c200a5e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/db21f612d0d347f386b7d5f4b71cb41107f7a4": "9f48e42408c4008a406a6461f11f63ab",
".git/objects/8d/bf2f2bb4486d459e9be5d755640136acc5f96b": "484b27f6c0af79dfd1e776b847138b03",
".git/objects/8e/03fcd7307a8734428df69e6ca7154a06e024a1": "94c5a36967bc8d13c962f2e4bec180fc",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9b/6ec612e451a35f0c13be097dcec2007256cc97": "b84cff3432e593164c22eed690907a1b",
".git/objects/9c/59a4423d2abfaef7ca704bebc754b2ed437163": "9d0f1d1d1e99f1b474169782318c2ab1",
".git/objects/9d/fe39887bbca390384ef17b02feb1528bec5154": "3f20bd8b574f094fb15e0ccb38ae7f70",
".git/objects/a0/8483b8bab07fcaea9cc3d909704c6c0fda78bf": "80747e6b920ce254c764b23b6632d188",
".git/objects/a2/4dd02a6f5a2248928289db021914fa00fdc7a1": "bf81ffa983107721d346f8d01599b1dc",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/09e132f69337d64db42db0eeb9c985bb09dbf5": "d3789c53071a51a7a95788e4b44f0deb",
".git/objects/a7/1002532901e9668c6eefdc049cca8f312e5c90": "7ea743ceed441be55d736a80f2175913",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8acbffc0422660f2660adbeee1681220514e49": "301ab75a3ba71a0e996be4c9daceaaf1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/4fd8398614c4053a86deaa5c349123959a225a": "9de0e45fced49b7ab17f144be87e2e40",
".git/objects/be/2dd7c1973b1b5855b2b2bdeafcc46b8eae344c": "b16408cf3f86476a155374954e3a6ccd",
".git/objects/c0/4f374ac651a26429fbf5b458e2af2c679c52fa": "d334561725c5d2043a9beed9a97c1a95",
".git/objects/c1/6c1b0bf1400273cff501dc3847e20e9badfc87": "26801d1a52451a9f84e41526e8887de4",
".git/objects/c1/7c860327419fecee6be4f0892a740bd4da3c87": "947001547dbc1e9322dc23815acbd561",
".git/objects/c2/f4db6b9886dc4d7030ef8f395b8910052cf55a": "57c503ca39ccf27ea296884bf5b391f1",
".git/objects/c7/122ae771b3fc2b70753081f06f78f81fea8d27": "df182272375084f5022da5d6a2a7f52c",
".git/objects/d3/381f103d6cf90a7c19b1cd371fe09dde5112f8": "6394f2a5a17e2d0f3104ed2108dfaaa8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/56d51a4c32189f72028b2204a4a67e6ec576be": "d93ac24bf3ee66e76b8bb9bf85041310",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/986057d80c74ba57df0b05858a15a671ce9a6f": "881894065c9aaaa294d0f201269c2e0b",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/da60d922d60718f55dc2bae5c21dda5c260761": "591aa1b07906d72596d376e5562fcaaa",
".git/objects/dd/479587947eef65180dbc0eee036d4b4efd0f76": "88f3c50f192ef3ffa9aa6ed632ccc7e9",
".git/objects/e2/e788ce20c311e594bde6346ca17e6d118ebf44": "1d8436e32b09745912c66d3cf5ce6f96",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/03c2bd33ed0b59c2c6caf421f20a33594087b5": "bd4d2ae8a7b829c2156290f598bd2afc",
".git/objects/f1/101e29bd79bb326bc4c5003cbef88b45317c07": "8e5a2790bf7ab8716382db32215fdf59",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/080a6fb61da0ae277b83a96d297c5d333cf4bc": "491e13bb3954ae31affd40ac7e312b19",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/bab61749928ab5e9de82f128d6895efc9d4e6e": "0b698afa772bccca635e5512b5ee4a81",
".git/refs/heads/main": "0c8dd48455c9337222e254b8aa29ef26",
".git/refs/remotes/origin/main": "0c8dd48455c9337222e254b8aa29ef26",
"assets/AssetManifest.bin": "854cebb3ba7add36c212c0eaa0688f37",
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
"flutter_bootstrap.js": "316aca2460ccc32a67ae7144f6eb923f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7f8540a78fb14c7390042bc5048ea2d0",
"/": "7f8540a78fb14c7390042bc5048ea2d0",
"main.dart.js": "c939b2ced06a554fa69da19c89aeff77",
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
