import { useState } from 'react'

export default function useInput(initialValue, validate) {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')

  const handleChange = (e) => {
    const { value: newValue } = e.target
    setValue(newValue)
    if (validate) {
      const validationError = validate(newValue)
      setErrorText(validationError)
      setError(!!validationError)
    }
  }
  return [
    value,
    {
      value,
      error,
      errorText,
      onChange: handleChange,
    },
    () => setValue(initialValue),
  ]
}
