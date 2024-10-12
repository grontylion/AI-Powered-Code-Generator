import containerQueries from '@tailwindcss/container-queries';
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { PluginAPI } from "tailwindcss/types/config";
const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: 'var(--font-roboto-mono)',
        sans: 'var(--font-inter)',
      },
      colors: {
        alpha: {
          400: 'hsl(var(--alpha-400))',
          600: 'hsl(var(--alpha-600))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        gray: {
          150: 'rgb(var(--gray-150))',
          700: 'rgb(var(--gray-700))',
          900: 'rgb(var(--gray-900))',
        },
      },
      width: {
        'sidebar-expanded': 'var(--sidebar-width-expanded)',
        'sidebar-collapsed': 'var(--sidebar-width-collapsed)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    animatePlugin,
    containerQueries,
    ({ addBase, theme }: PluginAPI) => {
      addBase({
        '::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: theme('colors.gray.100', '#f1f1f1'),
          borderRadius: '4px',
          width: '4px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.gray.300', '#888'),
          borderRadius: '4px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme('colors.gray.400', '#555'),
        },
        '.dark ::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        },
        '.dark ::-webkit-scrollbar-track': {
          backgroundColor: theme('colors.gray.800', '#2d2d2d'),
          borderRadius: '4px',
          width: '4px',
        },
        '.dark ::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.gray.600', '#555'),
          borderRadius: '4px',
        },
        '.dark ::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme('colors.gray.700', '#333'),
        },
      })
    },
  ],
}
export default config;



