import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1A2A4D", // Dark Blue (Dark Mode Elements)
        "very-dark-blue": "#1A1F33", // Very Dark Blue (Dark Mode Background)
        "very-dark-blue-light": "#32313A", // Very Dark Blue (Light Mode Text)
        "dark-gray": "#7F7F7F", // Dark Gray (Light Mode Input)
        "very-light-gray": "#F7F7F7", // Very Light Gray (Light Mode Background)
        white: "#FFFFFF", // White (Dark Mode Text & Light Mode Elements)
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"], // Fonte personalizada
      },
      fontSize: {
        body: "14px", // Tamanho de fonte para itens da homepage
        detail: "16px", // Tamanho de fonte para a página de detalhes
      },
      screens: {
        mobile: "375px", // Mobile
        desktop: "1440px", // Desktop
      },
    },
  },
  darkMode: "class", // Habilitar modo escuro baseado em classe
  plugins: [],
} satisfies Config;
