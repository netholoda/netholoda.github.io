<script lang="ts">
  export let to: string;
</script>

<a class="button" href={to}><slot /></a>

<style>
  .button {
    display: grid;
    height: 3.5rem;
    place-items: center;
    border-radius: 1.3rem;
    position: sticky;
    bottom: 1rem;
  }
</style>
