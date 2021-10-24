import { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from 'react'
import {
  innerWrapper,
  input,
  sliderValue,
  thumb,
  track,
  wrapper,
} from './slider.css'

import { assignInlineVars } from '@vanilla-extract/dynamic'
import { mergeClassNames } from 'src/merge-class-names'

type Props<T extends unknown> = {
  options: T[]
  value: T
  onChange: (value: T) => void
  id?: string
  label: ReactNode
  className?: string
}
export function Slider<T>({
  options,
  value,
  onChange,
  label,
  className,
  ...props
}: Props<T>): JSX.Element {
  const numOfOptions = options.length

  const inputValue = options.findIndex((option) => option === value) + 1 // 1-based index

  // zero-based decimal to calculate distance thumb travels
  const decimalValue = (1 / (numOfOptions - 1)) * (inputValue - 1)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = parseInt(event.target.value)
    const newSelectedOption = options[newInputValue - 1] // convert to zero-based index
    onChange(newSelectedOption)
  }

  return (
    <label
      className={mergeClassNames(wrapper, className)}
      style={assignInlineVars({
        [sliderValue]: decimalValue.toString(),
      })}
    >
      {label}
      <span className={innerWrapper}>
        <span className={track} />
        {/* input must be above the thumb, so we can use adjacent sibling selector when it's focussed */}
        <input
          type="range"
          min="1"
          max={numOfOptions}
          value={inputValue}
          onChange={handleInputChange}
          {...props}
          className={input}
        />
        <span className={thumb} />
      </span>
    </label>
  )
}
