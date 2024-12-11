/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        default: '#100212', // Main background color
        dark: '#1a1a1a', // Dark background color
      },
      colors: {
        // Primary Colors
        primary1: '#e389f1', // Moon Yellow 
        primary2: '#f8e1fb', // Midnight Blue
        primary1Dark: '#fddfaf', // Dark mode Moon Yellow
        primary2Dark: '#2a2b4d', // Dark mode Midnight Blue

        // Secondary Colors
        secondary1: '#e389f1', // Soft White 
        secondary2: '#A5C1DC', // Pale Blue 
        secondary1Dark: '#f9f9f9', // Dark mode Soft White
        secondary2Dark: '#A5C1DC', // Dark mode Pale Blue

        // Accent Colors
        accent1: '#F4D7C3',    // Peach 
        accent2: '#f8e1fb',    // Muted Gray 
        accent3: '#100212',    // Dark Navy 
        accent1Dark: '#f4d7c3', // Dark mode Peach
        accent2Dark: '#9fa3b2', // Dark mode Muted Gray
        accent3Dark: '#000000',
      },
      animation: {
        'slide-in-out': 'slide-in-out 6s forwards',
        'slide-in': 'slide-in 0.5s forwards',
      },
      keyframes: {
        'slide-in-out': {
          '0%': { transform: 'translateX(-100%)' }, // Start off-screen to the left
          '25%': { transform: 'translateX(0)' },   // Move to original position (1 second)
          '75%': { transform: 'translateX(0)' },   // Stay in position for 3 seconds
          '100%': { transform: 'translateX(-100%)' }, // Move back off-screen to the left (1 second)
        },
        'slide-in': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};


//colors 

// Primary Colors:
// Moon Yellow (#FDDFAF) - For the background or large sections.
// Midnight Blue (#2A2B4D) - For text, headers, or icons.

// Secondary Colors:
    
// Soft White (#F9F9F9) - For accents, borders, or to highlight key elements.
// Pale Blue (#A5C1DC) - For buttons, highlights, or secondary elements.

// Accent Colors:

// F4D7C3 (#F4D7C3) - For call-to-action buttons or important notifications.
// Muted Gray (#9FA3B2) - For subtle elements like dividers or hover states.