import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: '#111111',
        foreground: '#FFFFFF',
        muted: '#A1A1AA',
        accent: '#B8FF2C',
        border: '#1f1f1f',
      },
      fontFamily: {
        sans: ['Barlow', 'var(--font-sans)', 'sans-serif'],
        mono: ['Barlow', 'var(--font-sans)', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.7rem', { lineHeight: '1.45' }],
        sm: ['0.85rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.1rem', { lineHeight: '1.55' }],
        xl: ['1.2rem', { lineHeight: '1.45' }],
        '2xl': ['1.4rem', { lineHeight: '1.35' }],
        '3xl': ['1.6rem', { lineHeight: '1.25' }],
        '4xl': ['1.8rem', { lineHeight: '1.2' }],
        '5xl': ['2.2rem', { lineHeight: '1.1' }],
      },
      boxShadow: {
        'accent-glow': '0 0 24px rgba(184, 255, 44, 0.15)',
        'accent-glow-sm': '0 0 12px rgba(184, 255, 44, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        marquee: 'marquee 55s linear infinite',
        'marquee-reverse': 'marquee-reverse 55s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
