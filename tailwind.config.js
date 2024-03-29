/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      'verde':'#56ab2f'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

