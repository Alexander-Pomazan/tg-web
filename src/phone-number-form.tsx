import React, { useState, useCallback } from 'react'

interface PhoneNumberFormProps {
  onSubmit: (code: string) => void
}

export const PhoneNumberForm: React.FC<PhoneNumberFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    onSubmit(value)
  }, [onSubmit, value])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => setValue(e.currentTarget.value),
    [],
  )

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
