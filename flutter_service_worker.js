'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "12481ed665e76f12267e9aff8cb08c2c",
"index.html": "27bd5b6450a51a0626c497b4473baed5",
"/": "27bd5b6450a51a0626c497b4473baed5",
"main.dart.js": "c403146987d42b580bcab687d19c8c15",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "f18f6f2351b1f52bb7cdd6ad5e5bc1b6",
"icons/Icon-192.png": "d9c94885b0416408288132be707cf634",
"icons/Icon-maskable-192.png": "d9c94885b0416408288132be707cf634",
"icons/Icon-maskable-512.png": "2b3e3211dd01969477110dfbbd611046",
"icons/Icon-512.png": "2b3e3211dd01969477110dfbbd611046",
"manifest.json": "0b80313a93ce4cfdd959d886624b3926",
"assets/AssetManifest.json": "baf6987b0d29167b4b9357470917b632",
"assets/NOTICES": "6deaafb32e5436637f53b3396b07bdb1",
"assets/FontManifest.json": "81799912d5f8551d9951c3dec0a8c49f",
"assets/packages/flutterx/assets/forward_left.json": "f198394de9533a75cbd3bbfb223756ff",
"assets/packages/flutterx/assets/forward_right.json": "421233151632a84b7b935b4cdc9a967a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/rocket.gif": "6cac02da641301ffa494cf6e266ae557",
"assets/assets/images/Auth-BG.png": "6a6a2df7a7c62e7e79376ae8906be29e",
"assets/assets/images/logo-black.png": "bf0cc805c30f8dd9653e410303b2c6f7",
"assets/assets/images/maintenance.png": "4708bf7b9c7eae5075593eee0100193a",
"assets/assets/images/g4.jpeg": "ff404ecf4f25967ecdb9e0dda72c66b4",
"assets/assets/images/g8.jpeg": "077d44dde4a892a68b5b4f79541e3fbe",
"assets/assets/images/g9.jpeg": "ea6028c68d05c8fcd9d709771764f196",
"assets/assets/images/dark.png": "d8b29e65064977fa8a27c975d571d142",
"assets/assets/images/g5.jpeg": "3bc5992c20d233979181e5b9242eeea0",
"assets/assets/images/g2.jpeg": "69c9e5e3e30777a99a8922d1f2e58445",
"assets/assets/images/c3.jpeg": "6d4414dbffdeac0c40836915890f87a6",
"assets/assets/images/c2.jpeg": "a088c40cde7d3374290e88f42e80421e",
"assets/assets/images/g3.jpeg": "9e3e366edc4f87cf0917f5589f7704c4",
"assets/assets/images/error-404.svg": "af59b51e4422dbf2ab61c43d336b4218",
"assets/assets/images/logo-white.png": "ecb6746382e3f34d987f6bb04703033e",
"assets/assets/images/c1.jpeg": "7dd3776097da93ad0ac0cff1db45e907",
"assets/assets/images/login-bg.jpg": "64bd8e3cbc7693040d3b055a008e8b0d",
"assets/assets/images/logo-light-lg.png": "a07a063e5639f9b8af5f2bce29121fd8",
"assets/assets/images/logo-dark-lg.png": "95b4b9a6d2a8302eb7910bb523983e66",
"assets/assets/images/g1.jpeg": "0724c973e2914be68400ac16f8ab3e11",
"assets/assets/images/profile.jpeg": "1bfa2288a849de76482192038cc98c18",
"assets/assets/images/g6.jpeg": "83783c7258083843dadef0145132090e",
"assets/assets/images/logo-color.png": "87c16d287507ee33ac7cc9900797201d",
"assets/assets/images/logo-sm.png": "a5d989fb5ee10b237a3b3310b399ee24",
"assets/assets/images/image1.png": "50b34ac51c530c81d3b94a86b927c6d9",
"assets/assets/images/error-500.svg": "9e45ec6665fe6bd586e2ac021bd42303",
"assets/assets/images/g7.jpeg": "b3fd442d834248825472b1708795de35",
"assets/assets/icons/receipt-2-1.svg": "90bbb90f89b1bd81dc84bf2ebdc49bf9",
"assets/assets/icons/map.svg": "e7bdf89d64cc9c21594149f955810db4",
"assets/assets/icons/calendar-2.svg": "a4911892644a08f75a9113391844d9a9",
"assets/assets/icons/pin.svg": "6ca7416f556c9174dab111cec6821a15",
"assets/assets/icons/add-square.svg": "3ca368540d130c3c807013281d82a285",
"assets/assets/icons/sms.svg": "32c7859a8575a4528022e75f3441148f",
"assets/assets/icons/box-1.svg": "d22b7147dedb2beeb1b054f407eba3ae",
"assets/assets/icons/grid-2.svg": "2cf19a1e1dedcbc070aa5813efa5b955",
"assets/assets/icons/category.svg": "f62d3eb5ff6cdc3731e25c00b6477436",
"assets/assets/icons/notification-1.svg": "def464219fe311fc457af1169862b194",
"assets/assets/icons/maintenance.svg": "c1128a717dc4dfce45fb76a2d6f9fc55",
"assets/assets/icons/Admin_Kit.svg": "b454cd3f9db4e5aa74b601eba29c63d2",
"assets/assets/icons/arrow-right-2.svg": "e89449247c4aa98318b71b3ae394032b",
"assets/assets/icons/checkbox-circle.svg": "c9e57dc01a6fedc64718d5c42650c8ef",
"assets/assets/icons/facebook.svg": "35b49d77b2359b18e4284ad132dda413",
"assets/assets/icons/arrow-right-3.svg": "f689ba3a1c09ddf7a514a8b50e3f27c1",
"assets/assets/icons/home-2.svg": "9be3c87cf1daa465befda6239a59c915",
"assets/assets/icons/chart-pie.svg": "4aa0478dca9f5275fa0d852baef4d9dc",
"assets/assets/icons/search-normal-1.svg": "8f39818d05e1775ba1040de0d079152d",
"assets/assets/icons/Auth_BG.svg": "1de034439f41adb0b0bec3c105837e8a",
"assets/assets/icons/twitter.svg": "1d1bf5b7f02c61afe47a503bbf858e0e",
"assets/assets/icons/arrow-left.svg": "15cde702903952f1b4ded7ada8023c40",
"assets/assets/icons/Admin_Kit_Text.svg": "fb8b1bcbcf38f5a2618e7845c7de1011",
"assets/assets/icons/close-square.svg": "9a79e8ce8aa50dfbfa7ef3790f2b07d6",
"assets/assets/icons/setting-2.svg": "f5eb6aef16fea6a48b49fce98c62dd50",
"assets/assets/icons/archive-2.svg": "bcac69e6304142809c5f6a382a31cd82",
"assets/assets/icons/arrow-down-2.svg": "7f74e39e4d3d0f36b81dfb66b341103b",
"assets/assets/fonts/Nunito-Medium.ttf": "108670f0b05efd5a10ca1afce69e28a3",
"assets/assets/fonts/Nunito-ExtraBold.ttf": "004ce174f09a95594c74016b9a8333e8",
"assets/assets/fonts/Nunito-Light.ttf": "42405ee88f303e033d1ff57280f9cffc",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/Nunito-SemiBold.ttf": "45db66b4d9dff8842f4a8e5e3deb2f94",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito-Black.ttf": "18f25c22e665649aaf09be87bc6f23bb",
"assets/assets/fonts/Nunito-ExtraLight.ttf": "4c3094fa4bad68656f343116ebb3dae0",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
