import React, { useState, useCallback } from 'react'

interface RegistrationFormProps {
  onSubmit(firstName: string, lastName: string): void
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleFirstNameChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setFirstName(e.currentTarget.value)
  }, [])

  const handleLastNameChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setLastName(e.currentTarget.value)
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(firstName, lastName)
  }, [firstName, lastName, onSubmit])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="first name"
      />
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        placeholder="last name"
      />
      <button type="submit">submit</button>
    </form>
  )
}
