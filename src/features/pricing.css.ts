import { center, stack } from 'src/styles/layout.css'
import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { mediaQueries, themeTokens } from 'src/styles/theme.css'

export const main = style([
  center,
  stack({ size: 'extraLarge' }),
  {
    paddingBlock: '6rem',

    '@media': {
      [mediaQueries.desktop]: {
        minHeight: '100vh',
        gap: 0,
        justifyContent: 'space-evenly',
      },
    },
  },
])

export const header = style([
  stack({ size: 'small' }),
  {
    alignItems: 'center',
    lineHeight: '1.1',
    position: 'relative',
    fontSize: 'clamp(1rem, 0.8rem + 0.98vw, 1.5rem)',

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
  fontSize: 'clamp(1.25rem, 0.96rem + 1vw, 2rem)',
  lineHeight: '1.5',
})
const shadowColor = createVar()

export const form = style([
  {
    alignItems: 'center',
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

    // hide overflow as I haven't got a way of constraining the slider properly, without chopping off its shadow
    overflow: 'hidden',
  },
])

export const controlsSection = style([
  stack({ size: 'large' }),
  {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `'pageviews'
                        'slider'
                        'price'
                        'toggle'`,
    paddingBlock: '2rem',
    paddingInline: '1.5rem',
    justifyItems: 'center',
    alignItems: 'center',

    '@media': {
      [mediaQueries.desktop]: {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: `'pageviews price'
                            'slider slider'
                            'toggle toggle'`,
        paddingInline: '2rem',
      },
    },
  },
])

export const pageViews = style({
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  gridArea: 'pageviews',

  '@media': {
    [mediaQueries.desktop]: {
      justifySelf: 'start',
    },
  },
})

export const slider = style({
  gridArea: 'slider',
})

export const price = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  gridArea: 'price',

  '@media': {
    [mediaQueries.desktop]: {
      justifySelf: 'end',
    },
  },
})

export const toggle = style({
  gridArea: 'toggle',
  fontSize: 'clamp(0.81rem, 0.74rem + 0.37vw, 1rem)',
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

export const ctaSection = style([
  stack({ size: 'large' }),
  {
    paddingBlock: '2rem',
    paddingInline: '1.5rem',
    alignItems: 'center',
    borderTop: `2px solid ${themeTokens.color.neutral[300]}`,

    '@media': {
      [mediaQueries.desktop]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingInline: '2rem',
      },
    },
  },
])

export const featureList = style([
  stack({ size: 'zero' }),
  {
    alignItems: 'center',
    padding: 0,
    listStyle: 'none',

    '@media': {
      [mediaQueries.desktop]: {
        alignItems: 'flex-start',
      },
    },
  },
])

globalStyle(`${featureList} > li`, {
  position: 'relative',

  '@media': {
    [mediaQueries.desktop]: {
      display: 'flex',
      alignItems: 'center',
      gap: '1em',
    },
  },
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

  '@media': {
    [mediaQueries.desktop]: {
      position: 'static',
      transform: 'unset',
    },
  },
})

export const ctaButton = style({
  border: 'none',
  background: themeTokens.color.neutral[600],
  color: themeTokens.color.blue[100],
  borderRadius: '999px',
  paddingBlock: '0.75rem',
  paddingInline: '3rem',

  ':focus-visible': {
    boxShadow: `0 0 0 2px ${themeTokens.color.neutral[100]}, 0 0 0 4px ${themeTokens.color.neutral[600]}`,
    outline: '1px solid transparent',
    outlineOffset: '2px',
  },
})
