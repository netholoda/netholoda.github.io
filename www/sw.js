const CACHE_NAME = "pwa-v0.2";

const assets = [
  "./manifest.json",
  "./img/pwa/icons/maskable_icon_x48.png",
  "./img/pwa/icons/maskable_icon_x72.png",
  "./img/pwa/icons/maskable_icon_x96.png",
  "./img/pwa/icons/maskable_icon_x128.png",
  "./img/pwa/icons/maskable_icon_x192.png",
  "./img/pwa/icons/maskable_icon_x384.png",
  "./img/pwa/icons/maskable_icon_x512.png",
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

self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    clients.claim().then(() => {
      return caches.keys().then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        );
      });
    })
  );
});
