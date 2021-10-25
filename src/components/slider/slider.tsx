import { ChangeEvent, ReactNode, useEffect, useRef } from 'react'
import {
  innerWrapper,
  input,
  sliderIcon,
  sliderValue,
  thumb,
  thumbWrapper,
  track,
  wrapper,
} from './slider.css'

import { mergeClassNames } from 'src/merge-class-names'
import { setElementVars } from '@vanilla-extract/dynamic'
import { useSpring } from 'framer-motion'

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

  const springValue = useSpring(0, { mass: 0.3 })
  useEffect(() => {
    springValue.set(decimalValue)
  }, [decimalValue, springValue])

  const labelRef = useRef<HTMLLabelElement>(null)
  useEffect(() => {
    // apply the sprung version of the value as a CSS prop directly to the parent element
    // we do this by ref in an effect so we don't re-render on every change
    return springValue.onChange((val) => {
      if (labelRef.current) {
        setElementVars(labelRef.current, { [sliderValue]: val.toString() })
      }
    })
  }, [springValue])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = parseInt(event.target.value)
    const newSelectedOption = options[newInputValue - 1] // convert to zero-based index
    onChange(newSelectedOption)
  }

  return (
    <label className={mergeClassNames(wrapper, className)} ref={labelRef}>
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
        <span className={thumbWrapper}>
          <span className={thumb}>
            <SliderIcon className={sliderIcon} />
          </span>
        </span>
      </span>
    </label>
  )
}

function SliderIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 13"
      className={className}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 2.558v7.884a1 1 0 0 0 1.735.679l3.639-3.943a1 1 0 0 0 0-1.356l-3.64-3.943A1 1 0 0 0 16 2.558zm-10 0v7.884a1 1 0 0 1-1.735.679L.626 7.178a1 1 0 0 1 0-1.356l3.64-3.943A1 1 0 0 1 6 2.558z"
      />
    </svg>
  )
}
