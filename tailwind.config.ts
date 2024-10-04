import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mist: "#F2E8CF",
        primarygreen: "#386641",
        secondarygreen: "#6A994E"
      },
      fontFamily: {
        monoton: ["Monoton", "cursive"],
        spline: ["Spline Sans mono", "monospace"],
      }
    },
  },
  plugins: [],
};
export default config;
