/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes"'],
        'lora': ['"Lora"'],
        'petrona': ['"Petrona"'],
      },
      colors: {
        primary: '#2A5238',     
        secondary: '#FFD7BA',    
        bgbutton: '#DBDEBF',     
        background: '#F8F5F2',   
        white: '#F6F3EA',         
      },
    },
  },
  plugins: [],
}