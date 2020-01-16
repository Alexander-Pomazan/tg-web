import React, { useCallback } from 'react'
import { useRegisterUser } from 'src/client'
import { RegistrationForm } from './registration-form'

export const RegistrationFormContainer = () => {
  const [registerUser, { loading }] = useRegisterUser()

  const handleSubmit = useCallback((firstName: string, lastName: string): void => {
    if (loading) return

    registerUser(firstName, lastName)
  }, [loading, registerUser])

  return <RegistrationForm onSubmit={handleSubmit} />
}
