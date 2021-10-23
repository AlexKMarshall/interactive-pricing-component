import { globalStyle } from '@vanilla-extract/css'
import { themeTokens } from './theme.css'

globalStyle('html, body', {
  fontFamily: "'Manrope', sans-serif",
  fontWeight: themeTokens.typography.weight.normal,
})

globalStyle('body', {
  minHeight: '100vh',
  backgroundColor: themeTokens.color.neutral[200],
  color: themeTokens.color.neutral[500],
})

globalStyle('h1', {
  color: themeTokens.color.neutral[600],
})
