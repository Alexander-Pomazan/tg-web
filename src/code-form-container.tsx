import React, { useCallback } from 'react'
import { useCheckAuthenticationCode } from 'src/client'
import { CodeForm } from './code-form'

// eslint-disable-next-line no-console
export const CodeFormContainer = () => {
  const [checkCode, { loading }] = useCheckAuthenticationCode()

  const handleSubmit = useCallback((phoneNumber) => {
    if (loading) return

    checkCode(phoneNumber)
  }, [loading, checkCode])

  return <CodeForm onSubmit={handleSubmit} />
}
