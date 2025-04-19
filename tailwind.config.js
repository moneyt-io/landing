/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#22D3EE', // Turquesa (basado en el 'brand-cyan' anterior)
        'white': '#FFFFFF',
        'black': '#000000',
        // Puedes mantener otros colores si los necesitas
        'brand-green': '#34D399',
        'brand-dark': '#374151'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
