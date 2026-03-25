<script setup lang="ts">
const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const loading = ref(false);

async function handleSubmit() {
  loading.value = true;
  try {
    await $fetch("/api/send-email", {
      method: "POST",
      body: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
    });
    alert("Üzenet elküldve!");
    form.name = "";
    form.email = "";
    form.phone = "";
    form.message = "";
  } catch {
    alert("Hiba történt az email küldésekor.");
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section id="email" class="py-8 px-4">
    <div class="flex justify-center items-center mb-12">
      <div class="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8 md:p-12">
        <form @submit.prevent="handleSubmit">
          <h2
            class="text-2xl font-bold text-center mb-8 relative pb-3 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-12 after:rounded after:bg-orange"
          >
            Küldj emailt!
          </h2>
          <input
            v-model="form.name"
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
            v-model="form.phone"
            type="tel"
            class="contact-field"
            placeholder="Telefon"
            required
          />
          <textarea
            v-model="form.message"
            class="contact-field min-h-[150px]"
            placeholder="Üzenet"
          />
          <div class="text-center">
            <button
              type="submit"
              :disabled="loading"
              class="btn-primary-orange"
            >
              {{ loading ? "Küldés..." : "Elküld" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
