import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora-VariableFont_wght', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          main: '#446657',        // Sage green
          container: '#C5EBD8',   // Soft sage tint
          fixed: '#B8DDCA',       // Chip color
          dark: '#244638',        // Deep sage (text)
        },

        secondary: {
          container: '#D4E4FA',   // Soft blue-gray
          main: '#7A8F99',        // Muted slate
          deep: '#596060',        // Text secondary
          subtle: '#ACB3B2',      // Outline / ghost border
        },

        surface: {
          base: '#F8FAF9',                // Main background
          container: '#EAEFEE',           // Content blocks
          low: '#F0F4F3',                 // Slight variation
          high: '#E4E9E8',                // Inputs
          lowest: '#FFFFFF',              // Cards / pop layer
          variant: '#DDE4E3',             // Glass layer
        },

        text: {
          primary: '#2D3433',     // Main text (NOT pure black)
          secondary: '#596060',   // Muted text
          inverse: '#FFFFFF',     // On dark backgrounds
        },

        semantic: {
          red: '#FF4D4D',
          'light-red': '#E65E5E',
          green: '#446657',       // Use brand green instead of harsh green
        },
      },
    },
  },
  plugins: [],
}
export default config;
