<script setup lang="ts">
useSeoMeta({
  title: 'Pályázat | Móra Solar 88 Kft.',
  description: 'Lakossági és ipari pályázatok ügyintézése, a tervezéstől az átadásig.',
  ogTitle: 'Pályázat | Móra Solar 88 Kft.',
  ogDescription: 'Lakossági és ipari pályázatok ügyintézése, a tervezéstől az átadásig.',
  ogImage: 'https://morasolar.com/images/og_image.png',
})
</script>

<template>
  <ServicePage title="Pályázat" image="/images/palyazat.jpg">
    <p>
      Legyen szó lakossági vagy ipari felhasználásról, mi segítünk
      ügyfeleinknek eljutni pályázati úton a kivitelezésig. Célunk az,
      hogy a lehető legjobb minőségben készüljön el a eltervezett
      projekt. Komplett háttér csapatunkkal a tervezéstől egészen az
      átadásig mindenben igyekszünk a megrendelőt segíteni és az
      esetleges kérdésire válaszolni.
    </p>
    <p>
      További információért írjon emailt nekünk, és mi felvesszük Önnel a kapcsolatot.
    </p>
    <template #action>
      <NuxtLink to="/#email" class="btn-primary-orange">Email küldése</NuxtLink>
    </template>
  </ServicePage>
</template>
