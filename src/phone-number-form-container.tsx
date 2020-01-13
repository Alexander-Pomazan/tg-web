import React, { useCallback } from 'react'
import { useSetPhoneNumber } from 'src/client'
import { PhoneNumberForm } from './phone-number-form'

export const PhoneNumberFormContainer: React.FC = () => {
  const [setPhone] = useSetPhoneNumber()

  const handleSubmit = useCallback((phoneNumber) => {
    setPhone(phoneNumber)
  }, [setPhone])

  return <PhoneNumberForm onSubmit={handleSubmit} />
}
