import React, { useState, useEffect } from 'react'
import { LoginForm } from './login-form'
import { TelegramClient } from './telegram-client'
import { TelegramClientContext } from './telegram-client-context'


interface TelegramApplicationProps {
  client: TelegramClient
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useAuthState = (client: TelegramClient): any => {
  const [authState, setAuthState] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // subscribe to client state updates

    (async (): Promise<void> => {
      setLoading(true)
      const newAuthState = await client.send({
        '@type': 'getAuthorizationState',
      })

      setAuthState(newAuthState)

      setLoading(false)
    })()
  }, [client])
  console.log(authState)

  return { authState, loading }
}

// eslint-disable-next-line arrow-body-style
export const TelegramApplication: React.FC<TelegramApplicationProps> = ({ client }) => {
  const { authState, loading } = useAuthState(client)
  console.log(authState)
  if (loading) return <div>Loading...</div>

  return (
    <TelegramClientContext.Provider value={client}>
      <LoginForm onSubmit={(): void => {}} />
    </TelegramClientContext.Provider>
  )
}
