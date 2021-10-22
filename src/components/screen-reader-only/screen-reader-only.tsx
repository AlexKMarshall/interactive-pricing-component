import { screenReaderOnly } from './screen-reader-only.css'

type Props = {
  children: React.ReactNode
}
export function ScreenReaderOnly({ children }: Props): JSX.Element {
  return <span className={screenReaderOnly}>{children}</span>
}
