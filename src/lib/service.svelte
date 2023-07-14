<script context="module" lang="ts">
  type Icon =
    | "Gudit"
    | "Namorajivaet"
    | "NenHolodaKamere"
    | "PeremorazhivaetKamera"
    | "Podtekaet"
    | "VibivaetAvtomat";
  export interface Data {
    title: string;
    icon: Icon;
    reasons: string[];
  }
</script>

<script lang="ts">
  import Gudit from "../lib/reasons/gudit.svelte";
  import Namorajivaet from "../lib/reasons/namorajivaet.svelte";
  import NenHolodaKamere from "../lib/reasons/nenholodakamere.svelte";
  import PeremorazhivaetKamera from "../lib/reasons/peremorazhivaetkamera.svelte";
  import Podtekaet from "../lib/reasons/podtekaet.svelte";
  import VibivaetAvtomat from "../lib/reasons/vibivaetavtomat.svelte";

  export let data: Data;
</script>

<div class="service">
  {#if data.icon === "Gudit"}
    <Gudit />
  {/if}
  {#if data.icon === "Namorajivaet"}
    <Namorajivaet />
  {/if}
  {#if data.icon === "NenHolodaKamere"}
    <NenHolodaKamere />
  {/if}
  {#if data.icon === "PeremorazhivaetKamera"}
    <PeremorazhivaetKamera />
  {/if}
  {#if data.icon === "Podtekaet"}
    <Podtekaet />
  {/if}
  {#if data.icon === "VibivaetAvtomat"}
    <VibivaetAvtomat />
  {/if}

  {data.title}
  <ul>
    {#each data.reasons as reason}
      <li>{reason}</li>
    {/each}
  </ul>
</div>

<style>
  .service {
    box-shadow: 0 0.4rem 2rem -1.5rem var(--main-color);
    border-radius: 2rem;
    padding: 2rem;
    height: calc(100vh - 1.5rem);
    display: grid;
    justify-items: center;
    align-content: center;
    gap: 1rem;
    scroll-margin: 0.7rem;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }

  .service li::marker {
    content: "🚧";
    font-size: 1.2em;
  }
  /* @media (min-width: 700px) {
    .service {
      height: auto;
    }
  } */
</style>
