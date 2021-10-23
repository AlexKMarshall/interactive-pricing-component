import { createVar, globalStyle, style } from '@vanilla-extract/css'

import { calc } from '@vanilla-extract/css-utils'

export const wrapper = style({
  display: 'block',
  width: '100%',
  overflow: 'hidden',
})

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
  width: '100%',
  height: '100%',
  opacity: 0.05,
})

export const sliderValue = createVar()

export const track = style({
  display: 'block',
  position: 'relative',
  width: '100%',
  height: '0.5rem',
  background: 'gray',
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
    background: 'black',
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
    backgroundColor: 'blue',
  },
  vars: {
    [thumbDiameter]: '3.5rem',
  },
})
