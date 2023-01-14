/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-strong': '#0f2741',
        'brand-neutral-1': '#f5f8fb',
        'brand-neutral-2': '#f1f4f4',
        'brand-neutral-3': '#7b94a3',
        'brand-neutral-4': '#455f7c',
        'brand-light': '#0077d5',
        'brand-gradient-start': '#143356',
      },
    },
  },
  plugins: [],
}
