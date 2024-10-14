import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(0deg, rgba(5,25,35,1) 0%, rgba(0,100,148,1) 25%, rgba(0,166,251,1) 100%)',
        'blurry-gradient': "url('/images/blurry-gradient.png')"
      },
    },
  },
  plugins: [],
};
export default config;
