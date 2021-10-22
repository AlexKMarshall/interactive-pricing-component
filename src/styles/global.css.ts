import { globalStyle } from '@vanilla-extract/css'
import { themeTokens } from './theme.css'

globalStyle('html, body', {
  fontFamily: "'Manrope', sans-serif",
  fontWeight: themeTokens.typography.weight.normal,
})
