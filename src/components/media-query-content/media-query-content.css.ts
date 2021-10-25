import { mediaQueries, themeTokens } from 'src/styles/theme.css'

import { style } from '@vanilla-extract/css'

export const mobile = style({
  display: 'initial',

  '@media': {
    [mediaQueries.desktop]: {
      display: 'none',
    },
  },
})

export const desktop = style({
  display: 'none',

  '@media': {
    [mediaQueries.desktop]: {
      display: 'initial',
    },
  },
})
