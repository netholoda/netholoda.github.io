<section>
  <h3>Меня зовут Олег</h3>
  <p>
    Занимаюсь ремонтом холодильного оборудования более 5 лет. Подарю вашему
    холодильнику второю жизнь, решу проблему в кратчайшие сроки. Обращайтесь,
    задавайте интересующие вопросы по <a href="tel:{import.meta.env.VITE_PHONE}"
      >телефону</a
    >
    или в
    <a target="_blank" href="https://t.me/{import.meta.env.VITE_PHONE}"
      >телеграме</a
    >
  </p>
  <p>Всем добра 🙏</p>
  <div class="master" />
  <footer>
    &copy;{new Date().getFullYear()} Desing by
    <a href="https://t.me/otmozorok" target="_blank">@otmozorok</a>
  </footer>
</section>

<style>
  section {
    padding: 1rem 2rem 1rem 2rem;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    position: relative;
    overflow: hidden;
  }
  footer {
    font-weight: 100;
    position: absolute;
    bottom: 1rem;
    line-height: 1;
  }
  footer a {
    display: inline-grid;
  }
  .master {
    background-image: url(../../assets/master.png);
    background-size: 24rem;
    background-position: 33vw 100%;
    background-repeat: no-repeat;
    filter: drop-shadow(0.5rem 0.5rem 1.5rem var(--main-color-30));
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    pointer-events: none;
  }
</style>
