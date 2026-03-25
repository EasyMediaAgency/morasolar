<script setup lang="ts">
useSeoMeta({
  title: 'Napelem telepítés | Móra Solar 88 Kft.',
  description: 'Lakossági és ipari napelem telepítés teljeskörű pályázati ügyintézéssel.',
  ogTitle: 'Napelem telepítés | Móra Solar 88 Kft.',
  ogDescription: 'Lakossági és ipari napelem telepítés teljeskörű pályázati ügyintézéssel.',
  ogImage: 'https://morasolar.com/images/og_image.png',
})
</script>

<template>
  <ServicePage title="Napelem telepítés" image="/images/napelem_fal.jpg">
    <p>
      Cégünk 7 éve foglalkozik napelem telepítéssel, több mint 123
      rendszert tudunk a hátunk mögött, melyek ipari épületek és
      lakóházak energiaellátásában segítenek. Lakossági, ipari és
      MVH-s pályázatokban is részt veszünk, komplett háttér csapattal
      tudjuk Ügyfeleinket pályázati úton eljuttatni a kiépítésig.
    </p>
    <template #action>
      <NuxtLink to="/palyazat" class="btn-primary-orange">Pályázatokról</NuxtLink>
    </template>
  </ServicePage>
</template>
