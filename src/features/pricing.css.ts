import { center, stack } from 'src/styles/layout.css'

import { style } from '@vanilla-extract/css'
import { themeTokens } from 'src/styles/theme.css'

export const main = style([
  center,
  stack({ size: 'extraLarge' }),
  {
    paddingBlock: '6rem',
    outline: '1px solid navy',
  },
])

export const header = style([
  stack({ size: 'small' }),
  {
    alignItems: 'center',
    lineHeight: '1.1',
    outline: '1px solid navy',
  },
])

export const h1 = style({
  fontSize: '1.25rem',
  lineHeight: '1.5',
})

export const form = style([
  stack({ size: 'large' }),
  {
    alignItems: 'center',
    paddingBlock: '2rem',
    outline: '1px solid navy',
  },
])

export const pageViews = style({
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
})

export const price = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

export const priceAmount = style({
  fontSize: '2rem',
  fontWeight: themeTokens.typography.weight.bold,
})

export const divider = style({
  width: '100%',
})

export const featureList = style([
  stack({ size: 'zero' }),
  {
    alignItems: 'center',
    padding: 0,
  },
])

export const ctaButton = style({
  border: 'none',
  background: 'black',
  color: 'white',
  borderRadius: '999px',
  paddingBlock: '0.75rem',
  paddingInline: '3rem',
})
