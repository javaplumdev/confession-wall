import type { Config } from 'tailwindcss'

import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        Helvetica: ['Helvetica']
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        customTheme: {
          colors: {
            primary: {
              DEFAULT: '#f43f5e',
              foreground: '#000000'
            },
            secondary: {
              DEFAULT: '#27272a',
              foreground: '#000000'
            }
          }
        }
      }
    })
  ]
}
export default config
