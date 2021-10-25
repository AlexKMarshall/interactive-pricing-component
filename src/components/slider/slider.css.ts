import {
  createTheme,
  createVar,
  globalStyle,
  style,
} from '@vanilla-extract/css'

import { calc } from '@vanilla-extract/css-utils'
import { themeTokens } from 'src/styles/theme.css'

const [sliderThemeClass, sliderThemeTokens] = createTheme({
  color: {
    trackEmpty: themeTokens.color.neutral[300],
    trackFill: themeTokens.color.cyan[300],
    thumb: themeTokens.color.cyan[500],
    thumbHover: themeTokens.color.cyan[300],
    thumbIcon: themeTokens.color.cyan[400],
    thumbActive: themeTokens.color.cyan[500],
  },
})

export { sliderThemeTokens }

export const wrapper = style([
  sliderThemeClass,
  {
    display: 'block',
    width: '100%',
  },
])

export const innerWrapper = style({
  display: 'grid',
  gridTemplateAreas: "'layer'",
  alignItems: 'center',
})

globalStyle(`${innerWrapper} > *`, {
  gridArea: 'layer',
})

export const input = style({
  display: 'block',
  height: '100%',
  opacity: 0.01,
  // we need to lift the input above the decorative thumb so it's clickable
  // we can't change the source order due to using adjacent sibling selector for focus
  zIndex: 2,

  // we change cursor on the input element as it's top of the zIndex stack
  ':hover': {
    cursor: 'grab',
  },
  ':active': {
    cursor: 'grabbing',
  },
})

export const sliderValue = createVar()

export const track = style({
  pointerEvents: 'none',
  display: 'block',
  position: 'relative',
  height: '0.5rem',
  background: sliderThemeTokens.color.trackEmpty,
  borderRadius: '999px',
  overflow: 'hidden',
  // filled in part of the track
  ':after': {
    content: '',
    display: 'block',
    position: 'absolute',
    height: '100%',
    width: '100%',
    transformOrigin: 'left',
    transform: `scaleX(${calc.multiply(sliderValue, '100%')})`,
    transition: 'transform 250ms linear',
    background: sliderThemeTokens.color.trackFill,
  },
})

const thumbDiameter = createVar()

export const thumbWrapper = style({
  // thumb wrapper takes full width of the track, so we can translate it a percentage of that
  display: 'block',
  position: 'relative',
  transform: `translateX(${calc.multiply(
    sliderValue,
    calc.subtract('100%', thumbDiameter)
  )})`,
  transition: 'transform 250ms linear',
  height: thumbDiameter,
  width: '100%',

  vars: {
    [thumbDiameter]: '3.5rem',
  },
})

export const thumb = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: thumbDiameter,
  width: thumbDiameter,
  borderRadius: '50%',
  backgroundColor: sliderThemeTokens.color.thumb,
  transition: 'filter 500ms ease',
  transitionProperty: 'filter, backgroundColor',

  selectors: {
    [`input:focus-visible + ${thumbWrapper} > &`]: {
      boxShadow: `0 0 0 2px ${themeTokens.color.neutral[100]}, 0 0 0 4px ${sliderThemeTokens.color.thumb}`,
    },
    [`input:focus-visible + ${thumbWrapper} > &,  input:hover + ${thumbWrapper} > &`]:
      {
        filter: 'brightness(1.15) saturate(0.5)',
      },
    [`input:active + ${thumbWrapper} > &`]: {
      backgroundColor: sliderThemeTokens.color.thumbActive,
    },
  },
})

export const sliderIcon = style({
  width: '50%',
  color: themeTokens.color.cyan[400],
})
