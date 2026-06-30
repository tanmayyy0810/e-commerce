/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        zoom: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },

        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        pulseSlow: {
          "0%,100%": { opacity: ".5" },
          "50%": { opacity: "1" },
        },

        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },

      animation: {
        marquee: "marquee 60s linear infinite",
        gradient: "gradient 16s ease infinite",
        float: "float 3s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease forwards",
        zoom: "zoom 2.5s ease-in-out infinite",
        rotateSlow: "rotateSlow 6s linear infinite",
        pulseSlow: "pulseSlow 2s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};