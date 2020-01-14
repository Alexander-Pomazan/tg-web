import React, { useCallback } from 'react'
import { useSetPhoneNumber } from 'src/client'
import { PhoneNumberForm } from './phone-number-form'

export const PhoneNumberFormContainer: React.FC = () => {
  const [setPhone, { loading }] = useSetPhoneNumber()

  const handleSubmit = useCallback((phoneNumber) => {
    if (loading) return

    setPhone(phoneNumber)
  }, [loading, setPhone])

  return <PhoneNumberForm onSubmit={handleSubmit} />
}
