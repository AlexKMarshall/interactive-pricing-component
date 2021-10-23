import { createGlobalTheme } from '@vanilla-extract/css'

export const themeTokens = createGlobalTheme(':root', {
  typography: {
    weight: {
      normal: '600',
      bold: '800',
    },
  },
  color: {
    neutral: {
      100: 'hsl(0, 0%, 100%)',
      200: 'hsl(230, 100%, 99%)',
      300: 'hsl(224, 65%, 95%)',
      400: 'hsl(223, 50%, 87%)',
      500: 'hsl(225, 20%, 60%)',
      600: 'hsl(227, 35%, 25%)',
    },
  },
})
