import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark:    '#07070f',
        dark2:   '#0c0c1e',
        dark3:   '#111128',
        surface: '#14143a',
        blue:    '#4f8eff',
        purple:  '#8b5cf6',
        cyan:    '#22d3ee',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
