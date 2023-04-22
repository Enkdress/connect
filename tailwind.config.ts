import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3f050",
        black1: "#1a1a1a",
        black2: "#222222",
        black3: "#282828",
        "primary-hover": "#F4F39A",
        "white-text": "#f1f1f1"
      }
    },
  },
  plugins: [],
} satisfies Config;
