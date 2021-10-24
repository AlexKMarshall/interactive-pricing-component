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
    trackFill: themeTokens.color.neutral[500],
    thumb: themeTokens.color.neutral[500],
    thumbActive: themeTokens.color.neutral[600],
  },
})

export { sliderThemeTokens }

export const wrapper = style([
  sliderThemeClass,
  {
    display: 'block',
    width: '100%',
    overflow: 'hidden',
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
})

export const sliderValue = createVar()

export const track = style({
  display: 'block',
  position: 'relative',
  height: '0.5rem',
  background: sliderThemeTokens.color.trackEmpty,
  borderRadius: '999px',
  overflow: 'hidden',
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

export const thumb = style({
  display: 'block',
  position: 'relative',
  transform: `translateX(${calc.multiply(
    sliderValue,
    calc.subtract('100%', thumbDiameter)
  )})`,
  transition: 'transform 250ms linear',
  height: thumbDiameter,
  width: '100%',
  '::before': {
    content: '',
    display: 'block',
    position: 'relative',
    height: thumbDiameter,
    width: thumbDiameter,
    borderRadius: '50%',
    backgroundColor: sliderThemeTokens.color.thumb,
  },
  vars: {
    [thumbDiameter]: '3.5rem',
  },
})
