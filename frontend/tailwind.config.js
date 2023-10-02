/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'trans-right':{
          '0%' :{transform:'translateX(50px)'},
          '100%' :{transform:'translateX(0px)'},
      },
        'trans-left':{
          '0%' :{transform:'translateX(-50px)'},
          '100%' :{transform:'translateX(0px)'},
    },
    'trans-up':{
      '0%' :{transform:'translateY(-50px)'},
      '100%' :{transform:'translateY(0px)'},
},
    'zoom-in': {
      '0%': {
        transform: 'scale3d(0.5, 0.5, 0.5) perspective(500px) translateZ(-50px)',
        opacity: 0,
      },
      '100%': {
        transform: 'scale3d(1, 1, 1) perspective(500px) translateZ(0)',
        opacity: 1,
      },
    }
    
    
  },
  animation:{
    'trans-right': 'trans-right 1s ease-in-out ',
    'trans-left': 'trans-left 1s ease-in-out',
    'trans-up': 'trans-up 1s ease-in-out',
    'zoom-in': 'zoom-in 0.5s ease-in-out',
  }
},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}