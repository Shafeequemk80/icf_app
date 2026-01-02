/** @type {import('tailwindcss').Config} */
import { colors } from "./src/theme/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: colors, },
  },
  plugins: [],
};
