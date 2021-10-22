import { ChangeEvent, ComponentPropsWithoutRef } from 'react'

type Props<T extends unknown> = {
  options: T[]
  value: T
  onChange: (value: T) => void
  id?: string
}
export function Slider<T>({
  options,
  value,
  onChange,
  ...props
}: Props<T>): JSX.Element {
  const numOfOptions = options.length

  const inputValue = options.findIndex((option) => option === value) + 1 // 1-based index

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = parseInt(event.target.value)
    const newSelectedOption = options[newInputValue - 1] // convert to zero-based index
    onChange(newSelectedOption)
  }

  return (
    <>
      <input
        type="range"
        min="1"
        max={numOfOptions}
        value={inputValue}
        onChange={handleInputChange}
        {...props}
      />
    </>
  )
}
