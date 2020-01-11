import React, { useState } from 'react'

interface LoginFormProps {
  onSubmit: (code: string) => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={value}
        onChange={
          (e: React.FormEvent<HTMLInputElement>): void => setValue(e.currentTarget.value)
        }
      />
      <button type="submit">Submit</button>
    </form>
  )
}
