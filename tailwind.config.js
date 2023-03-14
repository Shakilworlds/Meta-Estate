/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "375px",
      md: "700px",
      lg: "1024px",
      xl: "1350px",
    },
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        "4xl": "0px 12px 24px rgba(0, 65, 34, 0.08)",
        "5xl": "0px 40px 40px -40px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        primary: "#0D5074",
        black: "#334155",
        peragraph: "#94A3B8",
        white: "#fff",
      },
      fontFamily: {
        FTMilky: ["FTMilky", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
