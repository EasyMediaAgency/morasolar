<script setup lang="ts">
const mobileMenuOpen = ref(false)
const dropdownOpen = ref(false)

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.classList.add('nav-active')
  } else {
    document.body.classList.remove('nav-active')
  }
}

function closeMenu() {
  mobileMenuOpen.value = false
  document.body.classList.remove('nav-active')
}

const services = [
  { label: 'Napelem telepítés', to: '/napelem' },
  { label: 'Napelem tisztítás', to: '/napelemtisztitas' },
  { label: 'Villanyszerelés', to: '/villanyszereles' },
  { label: 'Villamos felülvizsgálat', to: '/villamosfelulvizsgalat' },
  { label: 'Földmunka', to: '/foldmunka' },
]
</script>

<template>
  <header class="fixed top-0 left-0 w-full py-2.5 bg-white shadow-sm z-50 animate-slideIn">
    <div class="container mx-auto px-4 flex justify-between items-center gap-4">
      <NuxtLink to="/" class="shrink-0">
        <img
          src="/images/morasollogo.png"
          width="200"
          alt="Móra Solar 88 logo"
          class="block"
        />
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center gap-8 ml-auto mr-6">
        <NuxtLink to="/" class="font-bold text-charcoal hover:text-orange transition">
          Kezdőlap
        </NuxtLink>
        <NuxtLink to="/#rolunk" class="font-bold text-charcoal hover:text-orange transition">
          Rólunk
        </NuxtLink>
        <div class="relative" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
          <button class="font-bold text-charcoal hover:text-orange transition">
            Szolgáltatások
          </button>
          <div
            v-show="dropdownOpen"
            class="absolute top-full left-0 bg-white shadow-lg min-w-[200px] rounded z-10"
          >
            <NuxtLink
              v-for="s in services"
              :key="s.to"
              :to="s.to"
              class="block px-4 py-3 text-charcoal hover:bg-gray-100 hover:text-orange transition"
            >
              {{ s.label }}
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/palyazat" class="font-bold text-charcoal hover:text-orange transition">
          Pályázat
        </NuxtLink>
        <NuxtLink to="/#email" class="font-bold text-charcoal hover:text-orange transition">
          Kapcsolat
        </NuxtLink>
      </nav>

      <a
        href="tel:+36703731435"
        class="hidden md:block btn-primary-orange"
      >
        +36703731435
      </a>

      <!-- Mobile hamburger -->
      <button class="lg:hidden text-3xl text-charcoal" aria-label="open menu" @click="toggleMenu">
        <i class="fa-solid fa-bars" />
      </button>

      <!-- Mobile overlay -->
      <Transition name="fade">
        <div
          v-if="mobileMenuOpen"
          class="fixed inset-0 bg-raisin-black/80 z-40"
          @click="closeMenu"
        />
      </Transition>

      <!-- Mobile sidebar -->
      <Transition name="slide">
        <nav
          v-if="mobileMenuOpen"
          class="fixed top-0 left-0 w-[300px] h-screen bg-charcoal text-white p-8 flex flex-col gap-8 z-50"
        >
          <div class="flex justify-between items-center">
            <NuxtLink to="/" @click="closeMenu">
              <img src="/images/morasollogo.png" width="160" alt="Móra Solar 88 logo" />
            </NuxtLink>
            <button
              class="bg-white/10 text-white text-xl p-1.5 rounded-full hover:bg-white/20 transition"
              aria-label="close menu"
              @click="closeMenu"
            >
              <i class="fa-solid fa-xmark" />
            </button>
          </div>

          <div class="flex flex-col gap-2 flex-1">
            <NuxtLink to="/" class="font-bold py-1.5" @click="closeMenu">Kezdőlap</NuxtLink>
            <NuxtLink to="/#rolunk" class="font-bold py-1.5" @click="closeMenu">Rólunk</NuxtLink>
            <div>
              <p class="font-bold py-1.5">Szolgáltatások</p>
              <div class="pl-4 flex flex-col gap-1">
                <NuxtLink
                  v-for="s in services"
                  :key="s.to"
                  :to="s.to"
                  class="py-1 hover:text-orange transition"
                  @click="closeMenu"
                >
                  {{ s.label }}
                </NuxtLink>
              </div>
            </div>
            <NuxtLink to="/palyazat" class="font-bold py-1.5" @click="closeMenu">Pályázat</NuxtLink>
            <NuxtLink to="/#email" class="font-bold py-1.5" @click="closeMenu">Kapcsolat</NuxtLink>
          </div>

          <div class="flex flex-col gap-2 text-sm">
            <a href="mailto:villszer.nagy@gmail.com" class="hover:text-orange transition">
              villszer.nagy@gmail.com
            </a>
            <a href="tel:+36703731435" class="hover:text-orange transition">
              +36&nbsp;70&nbsp;373&nbsp;1435
            </a>
          </div>

          <a
            href="https://www.facebook.com/profile.php?id=100086360965952"
            target="_blank"
            class="text-2xl hover:-translate-y-1 transition-transform"
          >
            <i class="fa-brands fa-facebook" />
          </a>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
@keyframes slideIn {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}
.animate-slideIn {
  animation: slideIn 0.5s ease forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
