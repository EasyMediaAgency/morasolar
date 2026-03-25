<script setup lang="ts">
import VuePdfEmbed from "vue-pdf-embed";

useSeoMeta({
  title: "GINOP PLUSZ-1.2.4 | Móra Solar 88 Kft.",
  description: "GINOP_PLUSZ-1.2.4-25-2025-02099 pályázati tájékoztató.",
  ogTitle: "GINOP PLUSZ-1.2.4 | Móra Solar 88 Kft.",
  ogDescription: "GINOP_PLUSZ-1.2.4-25-2025-02099 pályázati tájékoztató.",
  ogImage: "https://morasolar.com/images/og_image.png",
});

const pdfSource = "/GINOP_PLUSZ-1.2.4-25-2025-02099.pdf";
</script>

<template>
  <section class="py-20 md:py-28 px-4">
    <div class="container mx-auto max-w-4xl">
      <h1
        class="text-2xl md:text-3xl font-bold text-charcoal text-center mb-10"
      >
        GINOP_PLUSZ-1.2.4-25-2025-02099
      </h1>

      <ClientOnly>
        <VuePdfEmbed
          :source="pdfSource"
          class="w-full shadow-md rounded-md overflow-hidden"
        />
      </ClientOnly>
    </div>
  </section>
</template>
