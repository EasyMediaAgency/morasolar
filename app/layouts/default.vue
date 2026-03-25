<template>
  <div>
    <AppHeader />
    <main class="pt-16">
      <slot />
    </main>
    <AppFooter />
    <Script src="https://smtpjs.com/v3/smtp.js" />
  </div>
</template>
