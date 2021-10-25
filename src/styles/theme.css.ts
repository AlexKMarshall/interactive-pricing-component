import { createGlobalTheme } from '@vanilla-extract/css'

export const themeTokens = createGlobalTheme(':root', {
  typography: {
    weight: {
      normal: '600',
      bold: '800',
    },
  },
  color: {
    red: {
      100: 'hsl(14, 92%, 95%)',
      300: 'hsl(15, 100%, 70%)',
    },
    blue: {
      100: 'hsl(226, 100%, 87%)',
    },
    cyan: {
      300: 'hsl(174, 77%, 80%)',
      400: 'hsl(174, 100%, 75%)',
      500: 'hsl(174, 86%, 45%)',
    },
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

export const mediaQueries = {
  desktop: '(min-width: 768px)',
}
