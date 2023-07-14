<script>
  import Button from "../button.svelte";
</script>

<section>
  <div class="main">
    <div class="fridge" />
    <h1 class="title">Ремонт холодильников в Усолье-Сибирском</h1>
  </div>
  <div class="footer"><Button>Обратиться ко мне</Button></div>
</section>

<style>
  section {
    height: 100vh;
    display: grid;
    grid-template-rows: auto max-content;
    /* scroll-margin: 0.7rem; */
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }
  .main {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    place-content: center;
  }
  .fridge {
    background-image: url(../../assets/fridge.png);
    background-size: cover;
    background-position: -20vh;
    background-repeat: no-repeat;
    filter: drop-shadow(-0.5rem 0 1.5rem var(--main-color));
  }
  .title {
    writing-mode: tb-rl;
    font-size: 3rem;
    font-weight: 900;
    height: 90vh;
    text-align: center;
    display: grid;
    place-items: center;
    line-height: 0.9;
    margin: 0;
  }
  .footer {
    display: grid;
    /* height: 3.5rem; */
    /* place-items: center; */
    padding: 0 1rem;
  }
  @media (min-width: 700px) {
    .main {
      justify-content: center;
    }
    .title {
      justify-self: self-end;
      padding-left: 2rem;
    }
    .fridge {
      background-position: calc(100% + 3rem);
      background-size: contain;
    }
  }
</style>
