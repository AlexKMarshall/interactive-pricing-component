import { Fragment } from 'react'
import { screenReaderOnly } from '..'

type Option<T extends string> = {
  label: string
  value: T
  checked: boolean
}

type Props<A extends string, B extends string> = {
  options: [Option<A>, Option<B>]
  label: string
  name: string
  onChange: (value: A | B) => void
}
export function RadioToggle<A extends string, B extends string>({
  label,
  options,
  name,
  onChange,
}: Props<A, B>): JSX.Element {
  return (
    <fieldset>
      <legend>{label}</legend>
      {options.map((option, index) => (
        <Fragment key={option.value}>
          <input
            id={`radio-${index}`}
            type="radio"
            value={option.value}
            name={name}
            checked={option.checked}
            onChange={(e) => {
              if (e.target.value === option.value) {
                onChange(option.value)
              }
            }}
          />
          <label htmlFor={`radio-${index}`}>{option.label}</label>
        </Fragment>
      ))}
    </fieldset>
  )
}
