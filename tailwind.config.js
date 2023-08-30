module.exports = {
  darkMode: ["class"],
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "540px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        orange: "#F90",
        horn: "#A1D9F7",
        blue: "#039",
        sky: "#E1F3FF",
        red: "#FB2E13",
        gray: "#999",
        "light-gray": "#F5F3F2",
        "dark-gray": "#1f1f1f",
      },
      fontSize: {
        "4.5xl": "2.875rem",
        "6xl": "4.125rem",
      },
      fontFamily: {
        montserrat: ["var(--montserrat)"],
        seymour: ["var(--seymour)"],
        "pt-root-ui": ["var(--pt-root-ui)"],
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: 0 },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: 0 },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: ["@tailwindcss/line-clamp"],
  variants: {
    lineClamp: ["responsive", "hover"],
  },
};
