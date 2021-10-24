import { center, stack } from 'src/styles/layout.css'
import { createVar, globalStyle, style } from '@vanilla-extract/css'

import { themeTokens } from 'src/styles/theme.css'

export const main = style([
  center,
  stack({ size: 'extraLarge' }),
  {
    paddingBlock: '6rem',
  },
])

export const header = style([
  stack({ size: 'small' }),
  {
    alignItems: 'center',
    lineHeight: '1.1',
    position: 'relative',

    ':after': {
      content: '',
      position: 'absolute',
      height: '145px',
      width: '145px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundImage: 'url("/pattern-circles.svg")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: -1,
    },
  },
])

export const h1 = style({
  fontSize: '1.25rem',
  lineHeight: '1.5',
})
const shadowColor = createVar()

export const form = style([
  stack({ size: 'large' }),
  {
    alignItems: 'center',
    paddingBlock: '2rem',
    backgroundColor: themeTokens.color.neutral[100],
    borderRadius: '8px',
    boxShadow: `
    1px 2px 2px hsl(${shadowColor} / 0.1),
    2px 4px 4px hsl(${shadowColor} / 0.1),
    4px 8px 8px hsl(${shadowColor} / 0.1),
    8px 16px 16px hsl(${shadowColor} / 0.1),
    16px 32px 32px hsl(${shadowColor} / 0.1)
    `,

    vars: {
      [shadowColor]: '225 20% 60%',
    },
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
  color: themeTokens.color.neutral[600],
})

export const discountBadge = style({
  display: 'inline-block',
  marginInlineStart: '1em',
  paddingBlock: '0.33em',
  paddingInline: '0.66em',
  borderRadius: '999px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '0.75em',
  fontWeight: themeTokens.typography.weight.bold,
  backgroundColor: themeTokens.color.red[100],
  color: themeTokens.color.red[300],
})

export const divider = style({
  width: '100%',
  borderStyle: 'solid',
  borderColor: themeTokens.color.neutral[300],
})

export const featureList = style([
  stack({ size: 'zero' }),
  {
    alignItems: 'center',
    padding: 0,
    listStyle: 'none',

    ':before': {
      content: '',
      display: 'inline-block',
      width: '1em',
      backgroundImage: 'url("/icon-check.svg")',
      backgroundColor: 'blue',
    },
  },
])

globalStyle(`${featureList} > li`, {
  position: 'relative',
})

globalStyle(`${featureList} > li:before`, {
  content: '',
  display: 'inline-block',
  position: 'absolute',
  left: '-2em',
  top: '50%',
  transform: 'translateY(-50%)',
  height: '1em',
  width: '1em',
  backgroundImage: 'url("/icon-check.svg")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
})

export const ctaButton = style({
  border: 'none',
  background: themeTokens.color.neutral[600],
  color: themeTokens.color.blue[100],
  borderRadius: '999px',
  paddingBlock: '0.75rem',
  paddingInline: '3rem',
})
