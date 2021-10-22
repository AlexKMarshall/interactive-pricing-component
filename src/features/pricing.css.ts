import { center, stack } from 'src/styles/layout.css'

import { style } from '@vanilla-extract/css'

export const main = style([
  center,
  stack({ size: 'extraLarge' }),
  {
    paddingBlock: '10rem',
  },
])

export const header = style([
  stack({ size: 'small' }),
  {
    alignItems: 'center',
  },
])

export const form = style([stack({ size: 'large' })])
