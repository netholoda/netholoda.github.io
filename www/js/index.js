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

  function updateThemeColor() {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const themeColor = isDarkMode ? "#171717" : "#e3e3e3";
    document.querySelector('meta[name="theme-color"]').content = themeColor;
  }

  updateThemeColor();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addListener(updateThemeColor);
});
