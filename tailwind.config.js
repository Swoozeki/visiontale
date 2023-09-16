/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['bumblebee', {
      darkbumblebee: {
        ...require("daisyui/src/theming/themes")["[data-theme=bumblebee]"],
        "base-100": "#1f2937",
      }
    }],
    darkTheme: 'darkbumblebee'
  }
}

