import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: "#071D49",
          blue: "#0E5EFF",
          light: "#00C2FF",
        },
        accent: {
          cyan: "#00E5FF",
          orange: "#FF8A00",
        },
        background: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC",
        },
        text: {
          primary: "#0F172A",
          muted: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "glow": "glow 3s ease-in-out infinite alternate",
        "ripple": "ripple 0.6s linear",
        "particle": "particle 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(14, 94, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 194, 255, 0.6)" },
        },
        ripple: {
          to: { transform: "scale(4)", opacity: "0" },
        },
        particle: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) rotate(720deg)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse at center, rgba(0, 194, 255, 0.15) 0%, transparent 70%)",
        "cta-glow": "radial-gradient(ellipse at center, rgba(0, 229, 255, 0.1) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
