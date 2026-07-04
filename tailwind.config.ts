import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#f47c20",
          dark: "#d96a10",
          light: "#ffd4b3",
          soft: "#ffb173",
        },
        ink: "#050505",
        surface: "#111111",
        "surface-2": "#171717",
        muted: "#c7c7c7",
      },
      borderColor: {
        brand: "rgba(244, 124, 32, 0.22)",
      },
      boxShadow: {
        glow: "0 0 18px rgba(244, 124, 32, 0.8)",
      },
      maxWidth: {
        content: "1180px",
      },
      letterSpacing: {
        eyebrow: "0.3em",
        hero: "0.38em",
      },
      animation: {
        gada: "gadaSpin 2.6s linear infinite",
        "cloud-drift": "cloudDrift 30s ease-in-out infinite alternate",
        "testimonial-in": "testimonialIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
