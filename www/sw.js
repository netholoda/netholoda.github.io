const CACHE_NAME = "pwa-v0.1";

const assets = [
  "./manifest.json",
  "./img/pwa/icons/icon-48.png",
  "./img/pwa/icons/icon-72.png",
  "./img/pwa/icons/icon-96.png",
  "./img/pwa/icons/icon-128.png",
  "./img/pwa/icons/icon-192.png",
  "./img/pwa/icons/icon-384.png",
  "./img/pwa/icons/icon-512.png",
  "./components/article/index.js",
  "./components/article/index.css",
  "./components/image/index.js",
  "./components/image/const.js",
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    self.skipWaiting().then(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(assets).catch((err) => {
          console.log("Failed to cache assets:", err);
        });
      });
    })
  );
});
