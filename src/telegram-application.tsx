import React from 'react'
import { TelegramClient, TelegramClientProvider } from 'src/client'
import { hot } from 'react-hot-loader'
import { LoginForm } from './login-form'

interface TelegramApplicationProps {
  client: TelegramClient
}


// eslint-disable-next-line arrow-body-style
const TelegramApplicationRaw: React.FC<TelegramApplicationProps> = ({ client }) => {
  return (
    <TelegramClientProvider value={client}>
      <LoginForm onSubmit={(): void => {}} />
    </TelegramClientProvider>
  )
}


export const TelegramApplication = hot(module)(TelegramApplicationRaw)
