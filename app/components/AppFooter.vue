<template>
  <footer class="bg-charcoal text-gray-300 py-16 px-4">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Brand -->
      <div>
        <NuxtLink to="/">
          <img src="/images/morasollogo.png" width="200" alt="Móra Solar 88 logo" />
        </NuxtLink>
        <p class="mt-5 text-sm">
          &copy; {{ new Date().getFullYear() }} Móra Solar 88 Kft.<br />
          Minden jog fenntartva.
        </p>
        <a
          href="https://www.facebook.com/profile.php?id=100086360965952"
          target="_blank"
          class="inline-block mt-4 text-white text-2xl hover:-translate-y-1 transition-transform"
        >
          <i class="fa-brands fa-facebook" />
        </a>
      </div>

      <!-- Kapcsolat -->
      <div>
        <h4 class="text-white font-bold text-lg mb-4">Kapcsolat</h4>
        <address class="not-italic text-sm leading-relaxed">
          6782 Mórahalom, Május 1. utca 15.
        </address>
        <a href="mailto:villszer.nagy@gmail.com" class="block mt-2 hover:text-orange transition text-sm">
          villszer.nagy@gmail.com
        </a>
        <a href="tel:+36703731435" class="block mt-1 hover:text-orange transition text-sm">
          +36 70 373 1435
        </a>
      </div>

      <!-- Linkek -->
      <div>
        <h4 class="text-white font-bold text-lg mb-4">További tudnivalók</h4>
        <nav class="flex flex-col gap-1 text-sm">
          <NuxtLink to="/#rolunk" class="py-1 hover:text-orange transition">Rólunk</NuxtLink>
          <NuxtLink to="/#szolgaltatasok" class="py-1 hover:text-orange transition">Szolgáltatások</NuxtLink>
          <NuxtLink to="/impresszum" class="py-1 hover:text-orange transition">Impresszum</NuxtLink>
          <NuxtLink to="/adatvedelem" class="py-1 hover:text-orange transition">Adatvédelem</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>
