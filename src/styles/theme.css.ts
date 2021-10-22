import { createGlobalTheme } from '@vanilla-extract/css'

export const themeTokens = createGlobalTheme(':root', {
  typography: {
    weight: {
      normal: '600',
      bold: '800',
    },
  },
})
