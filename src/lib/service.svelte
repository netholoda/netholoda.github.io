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
    button: string;
  }
</script>

<script lang="ts">
  import Gudit from "../lib/reasons/gudit.svelte";
  import Namorajivaet from "../lib/reasons/namorajivaet.svelte";
  import NenHolodaKamere from "../lib/reasons/nenholodakamere.svelte";
  import PeremorazhivaetKamera from "../lib/reasons/peremorazhivaetkamera.svelte";
  import Podtekaet from "../lib/reasons/podtekaet.svelte";
  import VibivaetAvtomat from "../lib/reasons/vibivaetavtomat.svelte";
  import Button from "./button.svelte";

  export let data: Data;
</script>

<div class="service">
  <div class="content">
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

    <div>
      {#each data.reasons as reason}
        <div class="reason">{reason}</div>
      {/each}
    </div>
  </div>

  <Button to="tel:{import.meta.env.VITE_PHONE}">{data.button}</Button>
</div>

<style>
  .service {
    border-radius: 2rem;
    padding: 1rem;
    height: calc(100vh - 1.5rem);
    display: grid;
    grid-template-rows: auto max-content;
    gap: 1rem;
    scroll-margin: 0.7rem;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    /* filter: drop-shadow(0 0.2rem 0.5rem var(--main-color-30)); */
    background: linear-gradient(var(--main-color-30) -450%, var(--main-bg-90)),
      var(--main-bg-90);
    border: 1px solid var(--main-bg-90);
  }
  .content {
    display: grid;
    justify-items: center;
    align-content: center;
    gap: 2rem;
  }
  .reason {
    display: grid;
    text-align: center;
    color: var(--text-color);
  }
</style>
