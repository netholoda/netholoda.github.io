import "../components/article/index.js";
import "../components/image/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector("loader");

  loader.remove();

  const stickyElm = document.querySelector("section");

  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle("sticky", e.intersectionRatio < 1),
    { threshold: [1], rootMargin: "0px 0px -1px 0px" }
  );

  observer.observe(stickyElm);
});

if ("serviceWorker" in navigator) {
  // регистрация сервис-воркера
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => {
      reg.onupdatefound = () => {
        const installingWorker = reg.installing;

        installingWorker.onstatechange = () => {
          if (
            installingWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            // Новая версия сервис-воркера доступна
            console.log("New service worker version available.");

            // Опционально: показать уведомление пользователю
            showUpdateNotification();
          }
        };
      };
    })
    .catch((err) => console.log("service worker not registered", err));
}
