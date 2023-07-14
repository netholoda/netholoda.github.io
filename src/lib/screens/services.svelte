<script lang="ts">
  import Service, { type Data } from "../service.svelte";

  const data: Data[] = [
    {
      title: "Течёт вода",
      icon: "Podtekaet",
      reasons: ["Прочистка дренажа", "Замена термостата", "Утечка фреона"],
      button: "Позвонить мне"
    },
    {
      title: "Перемораживает",
      icon: "PeremorazhivaetKamera",
      reasons: ["Замена датчика", "Ремонт модуля", "Замена термостата"],
      button: "Вызвать"
    },
    {
      title: "Не морозит",
      icon: "NenHolodaKamere",
      reasons: ["Заправка фреоном", "Замена термостата", "Замена компрессора"],
      button: "Вызвать мастера"
    },
    {
      title: "Гудит",
      icon: "Gudit",
      reasons: [
        "Замена вентилятора",
        "Замена компрессора",
        "Проверка NO FROST",
      ],
      button: "Вызвать на дом"
    },
    {
      title: "Выбивает автомат",
      icon: "VibivaetAvtomat",
      reasons: ["Замена компрессора", "Замена модуля", "Замена реле"],
      button: "Сделать звонок"
    },
    {
      title: "Намораживает",
      icon: "Namorajivaet",
      reasons: ["Заправка фреоном", "Замена датчика", "Засор капилярки"],
      button: "Связаться со мной"
    },
  ];
</script>

<section>
  {#each data as reason}
    <Service data={reason} />
  {/each}
  <!-- <Service icon="VibivaetAvtomat" />
  <Service icon="Podtekaet" />
  <Service icon="PeremorazhivaetKamera" />
  <Service icon="Gudit" />
  <Service icon="Namorajivaet" />
  <Service icon="NenHolodaKamere" /> -->
</section>

<style>
  section {
    display: grid;
    gap: 1rem;
    padding: 1rem;
  }
</style>
