import React from 'react'
import { TelegramClient, TelegramClientProvider } from 'src/client'
import { hot } from 'react-hot-loader'
import { AuthPage } from './auth-page'

interface TelegramApplicationProps {
  client: TelegramClient
}


// eslint-disable-next-line arrow-body-style
const TelegramApplicationRaw: React.FC<TelegramApplicationProps> = ({ client }) => {
  return (
    <TelegramClientProvider value={client}>
      <AuthPage />
    </TelegramClientProvider>
  )
}


export const TelegramApplication = hot(module)(TelegramApplicationRaw)
