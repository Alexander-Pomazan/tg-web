import React from 'react'
import { TelegramClient, TelegramClientProvider } from 'src/client'
import { LoginForm } from './login-form'

interface TelegramApplicationProps {
  client: TelegramClient
}


// eslint-disable-next-line arrow-body-style
export const TelegramApplication: React.FC<TelegramApplicationProps> = ({ client }) => {
  return (
    <TelegramClientProvider value={client}>
      <LoginForm onSubmit={(): void => {}} />
    </TelegramClientProvider>
  )
}
