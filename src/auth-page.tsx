import React from 'react'
import { useAuthState, useTelegramClient, tdlibAuthorizationStates } from 'src/client'
import { AuthPageLayout } from './auth-page-layout'
import { PhoneNumberFormContainer } from './phone-number-form-container'
import { CodeFormContainer } from './code-form-container'
import { RegistrationFormContainer } from './registration-form-container'

export const AuthPage: React.FC = () => {
  const { loading, authState } = useAuthState()

  const showLoadingState = ((): boolean => {
    const isWaitingSetParams = authState === tdlibAuthorizationStates
      .authorizationStateWaitTdlibParameters

    const isWaitingEncriptionKey = authState === tdlibAuthorizationStates
      .authorizationStateWaitEncryptionKey

    return loading || isWaitingSetParams || isWaitingEncriptionKey
  })()

  const client = useTelegramClient()
  React.useEffect(() => {
    if (authState === tdlibAuthorizationStates.authorizationStateReady) {
      // eslint-disable-next-line no-console
      client.sendRequest.getChats().then(console.log)
    }
  }, [authState, client])


  if (showLoadingState || !authState) return <div>Loading</div>

  // TODO: refactor component selection logic
  let authForm: React.ReactNode

  if (authState === tdlibAuthorizationStates.authorizationStateWaitPhoneNumber) {
    authForm = <PhoneNumberFormContainer />
  }

  if (authState === tdlibAuthorizationStates.authorizationStateWaitCode) {
    authForm = <CodeFormContainer />
  }

  if (authState === tdlibAuthorizationStates.authorizationStateWaitRegistration) {
    authForm = <RegistrationFormContainer />
  }

  // eslint-disable-next-line no-console
  console.log(authState)

  return <AuthPageLayout authForm={authForm} />
}
