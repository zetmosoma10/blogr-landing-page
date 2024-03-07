/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Primary
      Light_red_CTA_text: "hsl(356, 100%, 66%)",
      Very_light_red_CTA_hover_background: "hsl(355, 100%, 74%)",
      Very_dark_blue_headings: "hsl(208, 49%, 24%)",
      // Neutral
      White_text: "#fff",
      Grayish_blue_footer_text: "hsl(240, 2%, 79%)",
      Very_dark_grayish_blue_body_copy: "hsl(207, 13%, 34%)",
      Very_dark_black_blue_footer_background: "hsl(240, 10%, 16%)",
      // Gradient
      // Background gradient - Intro/CTA mobile nav
      Very_light_red: "hsl(13, 100%, 72%)",
      Light_red: "hsl(353, 100%, 62%)",
      // Background gradient - body
      Very_dark_gray_blue: "hsl(237, 17%, 21%)",
      Very_dark_desaturated_blue: " hsl(237, 23%, 32%)",
    },
    extend: {
      fontFamily: {
        overpass: "Overpass, sans-serif",
        ubuntu: "Ubuntu ,sans-serif",
      },

      backgroundImage: {
        "Infrastructure-img": 'url("/images/bg-pattern-circles.svg")',
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
