import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      screens: {
        md: '900px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--primary)',
      }, 
      fontFamily: {
        futura: [`var(--font-futura)`],
      
      },
      boxShadow: {
        'ring': '0 0 12px rgba(100, 100, 111, 0.3)',
      },
      animation: {
        'wrench': 'wiggle 1s linear infinite',
        'warp' : 'warp 10s ease-in-out infinite',
        'slowSpin': 'slowSpin 5s linear infinite',
      
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        warp: {
          '0%, 100%': { borderRadius: '18% 82% 28% 72% / 25% 40% 60% 75% ' },
          '50%': { borderRadius: '62% 38% 76% 24% / 71% 68% 32% 29%   ' },
        },
        slowSpin: {
          '0%' :{
            transform: 'rotate(0deg)'
          },
          '100%': { transform: 'rotate(360deg)' },
        }
      
      },
      transitionDuration: {
        '10s' : '10000ms',
      }

    },
  },
  plugins: [],
}
export default config
