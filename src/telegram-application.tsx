import React, { useState, useEffect } from 'react'
import { TelegramClient, TelegramClientProvider, useAuthState } from 'src/client'
import { LoginForm } from './login-form'

interface TelegramApplicationProps {
  client: TelegramClient
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useAuthStateold = (client: TelegramClient): any => {
  const [authState, setAuthState] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = client.subscribe.auth(
      (newAuthState: string): void => setAuthState(newAuthState),
    )

    const getAuthState = async (): Promise<void> => {
      setLoading(true)
      const newAuthState = await client.send({
        '@type': 'getAuthorizationState',
      })

      setAuthState(newAuthState)

      setLoading(false)
    }

    getAuthState()

    return (): void => unsubscribe()
  }, [client])


  return { authState, loading }
}

// eslint-disable-next-line arrow-body-style
export const TelegramApplication: React.FC<TelegramApplicationProps> = ({ client }) => {
  const authState = useAuthState()
  console.log(client)
  console.log({ authState })
  // eslint-disable-next-line no-console
  console.log('###########################', authState)
  // if (loading) return <div>Loading...</div>

  return (
    <TelegramClientProvider value={client}>
      <LoginForm onSubmit={(): void => {}} />
    </TelegramClientProvider>
  )
}
