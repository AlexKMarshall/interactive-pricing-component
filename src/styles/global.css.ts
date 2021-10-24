import { globalStyle } from '@vanilla-extract/css'
import { themeTokens } from './theme.css'

globalStyle('html, body', {
  fontFamily: "'Manrope', sans-serif",
  fontWeight: themeTokens.typography.weight.normal,
})

globalStyle('body', {
  minHeight: '100vh',
  position: 'relative',
  backgroundColor: themeTokens.color.neutral[200],
  color: themeTokens.color.neutral[500],
})

globalStyle('body::before', {
  content: '',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '60vh',
  borderBottomLeftRadius: 'clamp(150px, 100px + 10vw, 250px)',
  backgroundColor: themeTokens.color.neutral[300],
  zIndex: -1,
})

globalStyle('h1', {
  color: themeTokens.color.neutral[600],
})
