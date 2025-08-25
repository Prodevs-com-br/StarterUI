import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2C2377",
        },
        secondary: {
          DEFAULT: "#77FF88",
        },
      },
      borderRadius: {
        lg: "12px",
      }
    },
  },
  plugins: [],
}
export default config
