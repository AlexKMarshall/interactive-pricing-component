import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

export const center = style({
  maxWidth: '600px',
  paddingInline: '1.5rem',
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
        gap: '5rem',
      },
      large: {
        gap: '2rem',
      },
      small: {
        gap: '0.75rem',
      },
      zero: {
        gap: 0,
      },
    },
  },
})
