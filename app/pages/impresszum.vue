<script setup lang="ts">
useSeoMeta({
  title: "Impresszum | Móra Solar 88 Kft.",
  description: "Móra Solar 88 Kft. impresszum és cégadatok.",
  ogTitle: "Impresszum | Móra Solar 88 Kft.",
});
</script>

<template>
  <article>
    <section class="py-20 md:py-28 px-4 text-center">
      <div class="container mx-auto">
        <p class="section-subtitle">Móra Solar 88 Kft.</p>
        <h2 class="text-3xl md:text-4xl font-bold text-charcoal mb-8">
          Impresszum
        </h2>
      </div>
      <div class="max-w-3xl mx-auto text-left text-black-coral leading-relaxed">
        <h3 class="text-xl font-bold text-charcoal mb-4">
          A weboldal üzemeltetője a Móra Solar 88 Kft.
        </h3>
        <p>
          Szolgáltató neve: Móra Solar 88 Kft.<br />
          Székhelye és postai címe: 6782 Mórahalom Május 1.u 15.sz<br />
          Cégjegyzékszáma: 06-09-027039<br />
          Adószáma: 29303601-2-06<br />
          E-mail: morasolar88@gmail.com<br />
          Honlapjának címe: www.morasolar.com<br />
          Telefonszám:
          <a href="tel:+36703731435" class="text-orange hover:underline"
            >+36 70 373 1435</a
          >
        </p>
      </div>
    </section>
    <ContactForm />
  </article>
</template>
