<script setup lang="ts">
useSeoMeta({
  title: "Móra Solar 88 Kft. | Napelem és villanyszerelés",
  description:
    "Lakossági és ipari napelem telepítés teljeskörű pályázati ügyintézéssel. Épületek teljes villanyosítása és felújítása is a szakterületünk.",
  ogTitle: "Móra Solar 88 Kft. | Napelem és villanyszerelés",
  ogDescription:
    "Lakossági és ipari napelem telepítés teljeskörű pályázati ügyintézéssel. Épületek teljes villanyosítása és felújítása is a szakterületünk.",
  ogImage: "https://morasolar.com/images/og_image.png",
  ogType: "website",
  ogLocale: "hu_HU",
  ogUrl: "https://morasolar.com/",
});

useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/images/napelem_fal.jpg",
      fetchpriority: "high",
    },
  ],
});

const services = [
  {
    icon: "fa-solid fa-solar-panel",
    title: "Napelem telepítés",
    text: "Cégünk 7 éve foglalkozik napelem telepítéssel, több mint 123 rendszert építettünk ki, melyek ipari épületek és lakóházak egyaránt.",
    link: "/napelem",
  },
  {
    icon: "fa-solid fa-bolt-lightning",
    title: "Lakossági és ipari villanyszerelés",
    text: "Épületvillamosítással is foglalkozunk, az elektromos kapu kiépítésétől, a legutolsó izzó becsavarásig.",
    link: "/villanyszereles",
  },
  {
    icon: "fa-solid fa-helmet-safety",
    title: "Villamos biztonsági felülvizsgálat",
    text: "Érintésvédelmi- és villamos berendezések felülvizsgálatát is elvégezzük, naprakészen.",
    link: "/villamosfelulvizsgalat",
  },
  {
    icon: "fa-solid fa-truck-pickup",
    title: "Mini kotrógépes földmunka",
    text: "Közmű, árokásás, alapásás, talajtükrözési munkálatok elvégzését is vállaljuk, saját gépkezelővel.",
    link: "/foldmunka",
  },
];

const stats = [
  { value: "123db", label: "Telepített napelemrendszer" },
  { value: "77 ház", label: "Komplett villamosítás" },
  { value: "1579kW", label: "Telepített teljesítmény" },
  { value: "14 év", label: "Tapasztalat" },
];
</script>

<template>
  <article>
    <!-- HERO -->
    <section
      class="relative min-h-screen flex items-center justify-center text-center px-4 pt-24 overflow-hidden"
    >
      <NuxtImg
        src="/images/napelem_fal.jpg"
        alt=""
        aria-hidden="true"
        width="1920"
        height="1080"
        sizes="100vw"
        loading="eager"
        fetchpriority="high"
        preload
        class="hidden"
      />
      <div
        class="absolute inset-0 bg-cover bg-center bg-fixed"
        style="background-image: url(&quot;/images/napelem_fal.jpg&quot;)"
      />
      <div class="absolute inset-0 bg-black/35" />

      <SzechenyiTervPlusz />

      <div class="relative z-10 max-w-3xl mx-auto">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight"
        >
          Ön megálmodja, mi kivitelezzük!
        </h1>
        <p class="text-lg md:text-xl text-white drop-shadow mt-6 mb-9">
          Cégünk napelem telepítéssel, villanyszereléssel és villamos biztonsági
          felülvizsgálatokkal foglalkozunk.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink to="/napelem" class="btn-primary-white">
            Szolgáltatások
          </NuxtLink>
          <NuxtLink to="/#email" class="btn-primary-orange">
            Kapcsolat
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- SZOLGÁLTATÁSOK -->
    <section id="szolgaltatasok" class="py-20 md:py-28 px-4 text-center">
      <div class="container mx-auto">
        <p class="section-subtitle">Szolgáltatások</p>
        <h2
          class="text-3xl md:text-4xl font-bold text-charcoal leading-tight max-w-2xl mx-auto mb-12"
        >
          A több éves tapasztalat és a korszerű eszközök garantálják a tökéletes
          végeredményt.
        </h2>

        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div
            v-for="service in services"
            :key="service.link"
            class="p-10 rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-14 h-14 bg-orange rounded-full flex items-center justify-center text-white text-2xl mx-auto"
            >
              <i :class="service.icon" />
            </div>
            <h3 class="text-lg font-bold text-charcoal mt-4 mb-2">
              {{ service.title }}
            </h3>
            <p class="text-sm text-black-coral mb-4">{{ service.text }}</p>
            <NuxtLink
              :to="service.link"
              class="inline-flex items-center gap-1 text-orange font-bold hover:opacity-80 transition"
            >
              Tudj meg többet
              <i class="fa-solid fa-arrow-right text-sm" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- RÓLUNK -->
    <section id="rolunk" class="py-20 md:py-28 px-4">
      <div
        class="container mx-auto grid md:grid-cols-[0.7fr_1fr] gap-12 items-center"
      >
        <figure>
          <NuxtImg
            src="/images/daru.jpg"
            alt="Munkagép"
            width="800"
            height="531"
            sizes="(max-width: 767px) 100vw, 40vw"
            loading="lazy"
            format="webp"
            quality="80"
            class="w-full rounded-md"
          />
        </figure>
        <div>
          <p class="section-subtitle">Rólunk</p>
          <h2
            class="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6"
          >
            Több éves szakmai tapasztalattal segítünk a háztartások
            megújulásában
          </h2>
          <p class="text-black-coral leading-relaxed">
            14 év alatt sikerült kitapasztalni, hogy mire van igény
            lakóházaknál, illetve ipari létesítményeknél, melyhez próbálunk
            szakmailag is naprakészek lenni. Szeretjük az egyedi kihívásokat,
            azokat a projekteket, amiket a ház tulajdonosok megálmodnak, akár
            lakberendező segítségével, mi pedig a fizikai kivetelezésben tudunk
            résztvenni. 7 éve kezdtünk foglalkozni napelem rendszerek
            kiépítésével, ami ezáltal a munkánk nagy részét képzi, akár
            magánházaknál, akár ipari létesítményeknél.
          </p>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="px-4 mb-10">
      <div class="container mx-auto max-w-4xl">
        <div
          class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center bg-cover bg-center rounded-lg p-10 md:p-14"
          style="background-image: url(&quot;/images/blue-bg.jpg&quot;)"
        >
          <div v-for="stat in stats" :key="stat.label">
            <p class="text-3xl md:text-4xl font-bold text-white">
              {{ stat.value }}
            </p>
            <p class="text-white text-sm mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <ContactForm />
  </article>
</template>
