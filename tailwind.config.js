/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'JetBrains Mono': ['JetBrains Mono', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        georgia: ['Georgia', 'serif'],
        libre: ['Libre Baskerville', 'serif'],
        cormorant: ['Cormorant', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        abril: ['Abril Fatface', 'serif'],
        amatic: ['Amatic SC', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        firacode: ['Fira Code', 'monospace'],
        sourcecode: ['Source Code Pro', 'monospace'],
        ibmplex: ['IBM Plex Mono', 'monospace'],
        dancing: ['Dancing Script', 'cursive'],
        greatvibes: ['Great Vibes', 'cursive'],
        patrick: ['Patrick Hand', 'cursive'],
      },
      keyframes: {
        moveGlow: {
          '0%': {
            borderColor: '#ff66cc', // Light starts at the top-left corner
            boxShadow: '0px 0px 15px 5px rgba(255, 102, 204, 0.8)',
          },
          '25%': {
            borderColor: '#ff66cc', // Move to top-right corner
            boxShadow: '0px 0px 15px 5px rgba(255, 102, 204, 0.8)',
          },
          '50%': {
            borderColor: '#ff66cc', // Move to bottom-right corner
            boxShadow: '0px 0px 15px 5px rgba(255, 102, 204, 0.8)',
          },
          '75%': {
            borderColor: '#ff66cc', // Move to bottom-left corner
            boxShadow: '0px 0px 15px 5px rgba(255, 102, 204, 0.8)',
          },
          '100%': {
            borderColor: '#ff66cc', // Return to the top-left corner
            boxShadow: '0px 0px 15px 5px rgba(255, 102, 204, 0.8)',
          },
        },
      },
      animation: {
        moveGlow: 'moveGlow 3s linear infinite', // Apply animation to the text border
      },
      animation: {
        'pulse-slow': 'pulse 4s infinite',
        'move-lines': 'move 6s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        move: {
          '0%': { transform: 'translateX(-20px)' },
          '50%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
    plugins: [],
  }
};
