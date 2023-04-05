import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff325d",
        background: "#faf8ff",
      }
    },
  },
  plugins: [],
} satisfies Config;
