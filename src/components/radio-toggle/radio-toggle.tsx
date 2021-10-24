import { ReactNode, createContext, useContext } from 'react'
import { fieldSet, optionLabel } from './radio-toggle.css'

import { mergeClassNames } from 'src/merge-class-names'
import { screenReaderOnly } from '..'
import { useId } from '@react-aria/utils'

type RadioContext = {
  name: string
  onChange: (value: string) => void
}
const RadioContext = createContext<RadioContext | null>(null)

function useRadioToggle() {
  const context = useContext(RadioContext)
  if (!context) {
    throw new Error(`RadioOption must be used inside a RadioToggle component`)
  }
  return context
}

type Props = {
  label: string
  name: string
  onChange: (value: string) => void
  className?: string
  children: ReactNode
}
export function RadioToggle({
  label,
  name,
  onChange,
  className,
  children,
}: Props): JSX.Element {
  return (
    <fieldset className={mergeClassNames(fieldSet, className)}>
      <legend className={screenReaderOnly}>{label}</legend>
      <RadioContext.Provider value={{ name, onChange }}>
        {children}
      </RadioContext.Provider>
    </fieldset>
  )
}

type OptionProps = {
  value: string
  checked: boolean
  children: ReactNode
}
export function RadioOption({ children, value, checked }: OptionProps) {
  const { name, onChange } = useRadioToggle()
  const id = useId()

  return (
    <>
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        className={screenReaderOnly}
      />
      <label htmlFor={id} className={optionLabel}>
        {children}
      </label>
    </>
  )
}
