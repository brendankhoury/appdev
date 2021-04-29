'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9b8ceccca71890209c4ba144a79cf882",
"index.html": "52aa1449b083735e559cabdb1597f43a",
"/": "52aa1449b083735e559cabdb1597f43a",
"main.dart.js": "ce0c035b07e3006576c971847e232dcb",
"favicon.png": "931052ddff9c9d34a5d26150dad12971",
"icons/Icon-192.png": "eb33123fceaf72dfddd7091fabd89d72",
"icons/Icon-512.png": "a1df628e53ebea243b71095ad2642065",
"manifest.json": "427a018d8de73c39430987da4903a533",
"assets/AssetManifest.json": "df58f644c282dcf592f853c42f084012",
"assets/NOTICES": "b70f254bd24cf71f1bea3eded68a026f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/app_icon_no_backgroundmargin.png": "62235da2880044370e63440c8ea84cf0",
"assets/assets/android_app_banner.png": "3cfed761613008965b3d93479365628e",
"assets/assets/apply_icon.png": "e68b84c2827eaee3829e57cb95b0036e",
"assets/assets/app_icon.png": "13fa9c09c54c0a31bfbff039ecff2d6f",
"assets/assets/intro_slides.vectornator": "0d544378e6ad4ddaf5d6ecf44e09edea",
"assets/assets/language/en.json": "ba9ce3695f1810c990d1a18155a96987",
"assets/assets/form_icon.png": "4395612d0043ee933f5b2b4c40ad6f63",
"assets/assets/recommendations_icon.png": "6eea6d07e6e5a36d4214296c3e0795c1",
"assets/assets/app_icon_512.png": "4b61a35984b2d6d886f95765adcab08e",
"assets/assets/android_app_icon.afphoto": "7316da6d6f59b958b0d05b02c42bfd0b",
"assets/assets/icons/appleMaps.jpg": "ab9cb41ccacad3c6d6146dfeef618d4f",
"assets/assets/icons/telegram.png": "b82dd2282c7087666629492ac791b853",
"assets/assets/icons/googleMaps.png": "eac63c8a06cf31f2dad96a62d944ff3e",
"assets/assets/icons/sms.png": "d39308945a95e1bc5497149cbbd8fa4c",
"assets/assets/icons/no.png": "5e431b5c9c05eb080f37fc8e2937d4a1",
"assets/assets/icons/safari.png": "4befd24ddc651e0eafb2a5da9c05faea",
"assets/assets/icons/edge.png": "eb77e6dbf5c52773a59774127715972d",
"assets/assets/icons/app_icon.png": "448fd7ccbf02b5d07a918d39bf4879e0",
"assets/assets/icons/instagram.png": "2a7077fe740c4eda1d3496de03267f9a",
"assets/assets/icons/tmobile.png": "9a858054da956dab6fec233d36b579f3",
"assets/assets/icons/signal.png": "0899c3bb5b3ff307e09f9b6e58df3a18",
"assets/assets/icons/outlook.png": "ecc4e13dfbe7c943da660696a4a5f0a8",
"assets/assets/icons/memorizingPasswords.png": "e01d3805ec641fa65027ed1140cc34d6",
"assets/assets/icons/android.png": "8500f6faaa4c07ba14f8c063aa0d10d2",
"assets/assets/icons/gmail.png": "ca393378283c15492351b19969631116",
"assets/assets/icons/verizon.png": "7b96329c2f4bf43f17c841d7f1fc16e4",
"assets/assets/icons/protonmail.png": "0c543e204ee5348cdfd6f7d52149da17",
"assets/assets/icons/yes.png": "f2bfd8920baefd7e9e9792e773d806d0",
"assets/assets/icons/att.png": "abd3960319cfc35980306ad07fa04f96",
"assets/assets/icons/firefox.png": "2f3d3706baaa8c548d5e59f38d4e6f90",
"assets/assets/icons/tiktok.png": "8a51a38b38a9f106cb53520d6d05fef5",
"assets/assets/icons/waze.png": "d1f7dce9311676c1bb69cd84e8d6ab40",
"assets/assets/icons/apple.png": "84404a4f93ce08938ec711eff8866a8a",
"assets/assets/icons/chrome.png": "c950ed77b6be5ba642bbf245b9d2da69",
"assets/assets/icons/messenger.png": "248cc4f61b151c04b8c1900578554ca7",
"assets/assets/icons/duckduckgo.png": "7cfbebcd5b63305ecf874d512f1690aa",
"assets/assets/icons/imessage.png": "dec9ce29f0e0ca27f468a74718f6f3d3",
"assets/assets/icons/twitter.png": "219a294059ac50337e7ca5dcb790d48a",
"assets/assets/icons/opera.png": "c2d270ea4efd78107130516d01bfc556",
"assets/assets/icons/discord.png": "d4ef1bd5c88602ce9207984687c2dfef",
"assets/assets/icons/linkedin.png": "5f72a0bbf68c5c7486f67d05267286f9",
"assets/assets/icons/osmAnd.png": "83708f59b0b5bf03f8387d8c4a208b3c",
"assets/assets/icons/yahoo.png": "96205b4cb9247f74bac42eb39b674b94",
"assets/assets/icons/lineage.png": "7f0ecd5d2169507eccaa036b58e0938a",
"assets/assets/icons/none.png": "97c2d03515531a55d89caad5b12597d0",
"assets/assets/icons/brave.png": "0ae0595b79675d3733bacb1c9ca021b3",
"assets/assets/icons/passwordManager.png": "607f4f5a475f5805bba55db196660a02",
"assets/assets/icons/whatsapp.png": "ca6df7062b628068aa77eb13fabeff2f",
"assets/assets/icons/google.png": "19d7ab6a6511436cfffac54fab86190b",
"assets/assets/icons/wechat.png": "6e1c94d80b9b0f86b1401bdab59354bd",
"assets/assets/icons/facebook.png": "52aab9a55338ad74bd706616f31fb416",
"assets/assets/icons/snapchat.png": "df519f419d3a0d80824dae29fd8f085c",
"assets/assets/icons/bing.jpg": "6ea78e6233b0886412a9940a6e4bb0dd",
"assets/assets/icons/bing.png": "f9a09fa39ad40950a02b64d92203ede2",
"assets/assets/app_icon_no_background.png": "b7a54ad56c3845153e9c902ff20152e4",
"assets/assets/shield_icon.png": "31ba6aa5cfae4c62088b73554ece33bc",
"assets/assets/list_icon.png": "f5de19fd4f32fa51a2f1d898516f24be",
"assets/assets/application_shield_icon.png": "3b26be26035326615026c9413db37124"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
