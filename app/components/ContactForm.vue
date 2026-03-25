<script setup lang="ts">
const form = reactive({
  nev: '',
  email: '',
  telefon: '',
  uzenet: '',
})

const loading = ref(false)

async function handleSubmit() {
  loading.value = true
  try {
    // @ts-expect-error smtp.js global
    await Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'info@morasolar.com',
      Password: '3B940B582F5E3AF7D013E8F6096DCAAA3759',
      To: 'info@morasolar.com',
      From: 'info@morasolar.com',
      Subject: 'Új email a morasolar.com-ról',
      Body: `Név: ${form.nev}\nEmail: ${form.email}\nTelefonszám: ${form.telefon}\nÜzenet: ${form.uzenet}`,
    })
    alert('Üzenet elküldve!')
    form.nev = ''
    form.email = ''
    form.telefon = ''
    form.uzenet = ''
  } catch {
    alert('Hiba történt az email küldésekor.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="email" class="py-8 px-4">
    <div class="flex justify-center items-center mb-12">
      <div class="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8 md:p-12">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-2xl font-bold text-center mb-8 relative pb-3 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-12 after:rounded after:bg-orange">
            Küldj emailt!
          </h2>
          <input
            v-model="form.nev"
            type="text"
            class="contact-field"
            placeholder="Név"
            required
          />
          <input
            v-model="form.email"
            type="email"
            class="contact-field"
            placeholder="Email címed"
            required
          />
          <input
            v-model="form.telefon"
            type="tel"
            class="contact-field"
            placeholder="Telefon"
            required
          />
          <textarea
            v-model="form.uzenet"
            class="contact-field min-h-[150px]"
            placeholder="Üzenet"
          />
          <div class="text-center">
            <button
              type="submit"
              :disabled="loading"
              class="btn-primary-orange"
            >
              {{ loading ? 'Küldés...' : 'Elküld' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
