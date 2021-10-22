import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

export const center = style({
  boxSizing: 'content-box',
  maxWidth: '550px',
  paddingInline: '3rem',
  marginInline: 'auto',
})

export const stack = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },

  variants: {
    size: {
      extraLarge: {
        gap: '10rem',
      },
      large: {
        gap: '4rem',
      },
      small: {
        gap: '1rem',
      },
    },
  },
})
