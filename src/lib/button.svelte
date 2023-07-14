<div class="button"><slot /></div>

<style>
  .button {
    display: grid;
    height: 3.5rem;
    place-items: center;
    color: hsl(0, 0%, 100%);
    background: hsla(54, 100%, 50%, 0.1);
    backdrop-filter: blur(2px);
    margin: 1rem;
    border-radius: 1.3rem;
  }
</style>
