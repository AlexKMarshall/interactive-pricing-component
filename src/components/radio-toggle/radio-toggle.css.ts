import { createTheme, createVar, style } from '@vanilla-extract/css'

import { calc } from '@vanilla-extract/css-utils'
import { themeTokens } from 'src/styles/theme.css'

const [switchThemeClass, switchThemeTokens] = createTheme({
  color: {
    track: {
      base: themeTokens.color.neutral[400],
    },
    thumb: {
      base: themeTokens.color.neutral[100],
    },
  },
})

export const fieldSet = style([
  switchThemeClass,
  {
    border: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    isolation: 'isolate',
  },
])

const switchWidth = createVar()
const switchHeight = createVar()
const switchGap = createVar()
const thumbPadding = createVar()
const thumbDiameter = createVar()

export const optionLabel = style({
  userSelect: 'none', // otherwise double clicking on the switch selects the labels
  position: 'relative',
  flexShrink: 0,
  flexGrow: 0,

  vars: {
    [switchWidth]: '4em',
    [switchHeight]: '2em',
    [switchGap]: '1em',
    [thumbPadding]: '4px',
    [thumbDiameter]: calc.subtract(
      switchHeight,
      calc.multiply(2, thumbPadding)
    ),
  },

  selectors: {
    // first label
    '&:first-of-type': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: switchGap,
    },
    // first label when not checked
    'input:not(:checked) + &:first-of-type': {
      zIndex: 2, // we need to lift this above the other label to allow it to be selected
    },
    // second label, overlaps the first so we can click on both
    '&:nth-of-type(2)': {
      marginInlineStart: calc.negate(switchWidth),
      paddingInlineStart: calc.add(switchWidth, switchGap),
      zIndex: 1,
    },
    // switch track
    '&:first-of-type:before': {
      content: '',
      order: 2,
      display: 'block',
      right: 0,
      width: switchWidth,
      height: switchHeight,
      borderRadius: '999px',
      backgroundColor: switchThemeTokens.color.track.base,
    },
    // switch thumb
    '&:first-of-type:after': {
      content: '',
      display: 'block',
      position: 'absolute',
      right: thumbPadding,
      width: thumbDiameter,
      height: thumbDiameter,
      borderRadius: '50%',
      backgroundColor: switchThemeTokens.color.thumb.base,
    },
    // thumb with item 1 selected
    'input:checked + &:first-of-type:after': {
      transform: `translateX(${calc.negate(
        calc.subtract(
          switchWidth,
          calc.add(thumbDiameter, calc.multiply(2, thumbPadding))
        )
      )})`,
    },
    // focus styles on the switch
    [`${fieldSet}:focus-within &:first-of-type:before`]: {
      boxShadow: '0 0 0 2px red',
    },
    // focus styles on the label
    'input:focus-visible + &': {
      textDecoration: 'underline',
    },
  },
})
