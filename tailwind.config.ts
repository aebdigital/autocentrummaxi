import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        lime: {
          400: "#addf59",
          500: "#9dd14a",
          600: "#8bc43a",
          700: "#7ab32e",
        },
        dark: {
          900: "#0a0a0a",
          800: "#121212",
          700: "#1a1a1a",
          600: "#242424",
          500: "#2e2e2e",
        },
      },
      fontFamily: {
        exo: ['"SF Pro Display"', "Montserrat", "sans-serif"],
        inter: ["Montserrat", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in": "fadeIn 0.4s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
