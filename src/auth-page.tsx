import React from 'react'
import { useAuthState, tdlibAuthorizationStates } from 'src/client'
import { AuthPageLayout } from './auth-page-layout'
import { LoginForm } from './login-form'

export const AuthPage: React.FC = () => {
  const { loading, authState } = useAuthState()

  const showLoadingState = ((): boolean => {
    const isWaitingSetParams = authState === tdlibAuthorizationStates
      .authorizationStateWaitTdlibParameters

    const isWaitingEncriptionKey = authState === tdlibAuthorizationStates
      .authorizationStateWaitEncryptionKey

    return loading || isWaitingSetParams || isWaitingEncriptionKey
  })()

  if (showLoadingState) return <div>Loading</div>

  // eslint-disable-next-line no-console
  return <AuthPageLayout authForm={<LoginForm onSubmit={console.log} />} />
}
