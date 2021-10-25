import * as styles from './media-query-content.css'

import { ReactNode } from 'react'

type Props = { mobile: ReactNode; desktop: ReactNode }
export function MediaQueryContent({ mobile, desktop }: Props): JSX.Element {
  return (
    <>
      <span className={styles.mobile}>{mobile}</span>
      <span className={styles.desktop}>{desktop}</span>
    </>
  )
}
