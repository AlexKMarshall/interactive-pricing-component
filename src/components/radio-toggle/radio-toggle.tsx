import { fieldSet, optionLabel } from './radio-toggle.css'

import { screenReaderOnly } from '..'
import { useId } from '@react-aria/utils'

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
    <fieldset className={fieldSet}>
      <legend className={screenReaderOnly}>{label}</legend>
      {options.map((option) => (
        <Option
          label={option.label}
          key={option.value}
          value={option.value}
          name={name}
          checked={option.checked}
          onChange={(val) => {
            if (val === option.value) {
              onChange(option.value)
            }
          }}
        />
      ))}
    </fieldset>
  )
}

type OptionProps = {
  label: string
  value: string
  name: string
  onChange: (value: string) => void
  checked: boolean
}
function Option({ label, value, name, onChange, checked }: OptionProps) {
  const id = useId()

  return (
    <>
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked ?? undefined}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        className={screenReaderOnly}
      />
      <label htmlFor={id} className={optionLabel}>
        {label}
      </label>
    </>
  )
}
