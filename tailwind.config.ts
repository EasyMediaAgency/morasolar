import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        orange: '#f59750',
        charcoal: '#343e51',
        'raisin-black': 'hsla(216, 14%, 14%, 1)',
        'black-coral': 'hsla(220, 12%, 43%, 1)',
        cultured: 'hsla(220, 20%, 97%, 1)',
        'lavender-web': 'hsla(233, 52%, 94%, 1)',
        'cadet-blue': 'hsla(220, 12%, 70%, 1)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
} satisfies Partial<Config>
