<script setup lang="ts">
defineProps<{
  title: string
  image?: string
  imageAlt?: string
  imageLoading?: "eager" | "lazy"
}>()
</script>

<template>
  <article>
    <section class="py-20 md:py-28 px-4">
      <div class="container mx-auto grid md:grid-cols-[0.7fr_1fr] gap-12 items-center">
        <figure v-if="image" class="md:order-1">
          <NuxtImg
            :src="image"
            width="800"
            height="531"
            :alt="imageAlt || title"
            sizes="(max-width: 767px) 100vw, 40vw"
            :loading="imageLoading || 'eager'"
            :fetchpriority="imageLoading === 'lazy' ? 'auto' : 'high'"
            format="webp"
            quality="80"
            class="w-full rounded-md"
          />
        </figure>
        <div>
          <p class="section-subtitle">Móra Solar 88 Kft.</p>
          <h2 class="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
            {{ title }}
          </h2>
          <div class="text-black-coral leading-relaxed space-y-4">
            <slot />
          </div>
          <div class="mt-6">
            <slot name="action" />
          </div>
        </div>
      </div>
    </section>
    <ContactForm />
  </article>
</template>
