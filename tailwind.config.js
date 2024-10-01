/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'hsl(0, 100%, 74%)',
          green: 'hsl(154, 59%, 51%)'
        },
        accent: {
          blue: 'hsl(248, 32%, 49%)'
        },
        neutral: {
          'dark-blue': 'hsl(249, 10%, 26%)',
          'gray-blue': 'hsl(246, 25%, 77%)'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
        // Weights: 400, 500, 600, 700
      },
      backgroundImage: {
        mobile: "url('/images/bg-intro-mobile.png')",
        desktop: "url('/images/bg-intro-desktop.png')"
      }
    }
  },
  plugins: []
}
