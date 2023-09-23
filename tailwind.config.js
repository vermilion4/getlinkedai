/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(270deg, #903AFF, #FE34B9)',
        'gradient-trans': 'linear-gradient(270deg, transparent, transparent)',
        'gradient-reverse': 'linear-gradient(270deg, #FE34B9, #903AFF)',
        'man': "url('/man-with-vr.png')",
        'gradient-bg': "url('/gradient-bg.png')",
      },
      colors: {
        'primary': '#D434FE',
        'secondary': '#150e28',

      },
      fontFamily: {
        primary: "ClashDisplay"
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 6s infinite',
        'ping-slow': 'ping 6s cubic-bezier(0, 0, 0.2, 1) infinite'
      },

    },
  },
  plugins: [],
};
