<section>
  <h3>Здравствуйте!</h3>
  <p>Меня зовут Олег</p>
  <p>
    Занимаюсь ремонтом холодильного оборудования более 5 лет. Подарю вашему
    холодильнику второю жизнь, решу проблему в кратчайшие сроки. Обращайтесь,
    задавайте интересующие вопросы
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
    padding: 1rem 10rem 0 1rem;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    position: relative;
  }
  footer {
    padding: 0.5rem 0;
    font-weight: 100;
    position: absolute;
    bottom: 0;
  }
  footer a {
    display: inline-grid;
  }
  .master {
    background-image: url(../../assets/master.png);
    background-size: 27rem;
    background-position: 33vw 100%;
    background-repeat: no-repeat;
    filter: drop-shadow(0.5rem 0.5rem 1.5rem var(--main-color-60));
    width: 100vw;
    height: 100vh;
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
