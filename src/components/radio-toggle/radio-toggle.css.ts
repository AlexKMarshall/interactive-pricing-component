import { createTheme, createVar, style } from '@vanilla-extract/css'

import { calc } from '@vanilla-extract/css-utils'
import { themeTokens } from 'src/styles/theme.css'

const [switchThemeClass, switchThemeTokens] = createTheme({
  color: {
    track: {
      base: themeTokens.color.neutral[400],
      hover: themeTokens.color.cyan[200],
    },
    thumb: {
      base: themeTokens.color.neutral[100],
    },
  },
})

const switchWidth = createVar()
const switchHeight = createVar()
const switchGap = createVar()
const thumbPadding = createVar()
const thumbDiameter = createVar()

export const fieldSet = style([
  switchThemeClass,
  {
    border: 'none',
    margin: '0',
    padding: '0',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: `1fr ${switchWidth} 1fr`,
    width: '100%',
    alignItems: 'center',
    isolation: 'isolate',

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
  },
])

export const optionLabel = style({
  userSelect: 'none', // otherwise double clicking on the switch selects the labels
  position: 'relative',
  flexShrink: 0,
  flexGrow: 0,
  cursor: 'pointer',

  selectors: {
    // first label
    '&:first-of-type': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: switchGap,
      gridColumn: '1 / 3',
      gridRow: '1 / 2',
      justifySelf: 'end',
    },
    // first label when not checked
    'input:not(:checked) + &:first-of-type': {
      zIndex: 2, // we need to lift this above the other label to allow it to be selected
    },
    // second label, overlaps the first so we can click on both
    '&:nth-of-type(2)': {
      gridColumn: '2 / 4',
      gridRow: '1 / 2',
      paddingInlineStart: calc.add(switchWidth, switchGap),
      justifySelf: 'start',
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
      transition: 'background-color 150ms ease',
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
      transition: 'transform 200ms ease',
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
      boxShadow: `0 0 0 2px ${themeTokens.color.neutral[100]}, 0 0 0 4px ${switchThemeTokens.color.track.hover}`,
      outline: '1px solid transparent',
      backgroundColor: switchThemeTokens.color.track.hover,
    },
    // hover styles on the switch
    [`${fieldSet}:hover &:first-of-type:before`]: {
      backgroundColor: switchThemeTokens.color.track.hover,
    },
  },
})
