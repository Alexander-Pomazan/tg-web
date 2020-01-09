import React from 'react'
import { LoginForm } from './login-form'
import { TelegramClient } from './telegram-client'
import { TelegramClientContext } from './telegram-client-context'


interface TelegramApplicationProps {
  client: TelegramClient
}

// eslint-disable-next-line arrow-body-style
export const TelegramApplication: React.FC<TelegramApplicationProps> = ({ client }) => {
  return (
    <TelegramClientContext.Provider value={client}>
      <LoginForm onSubmit={(): void => {}} />
    </TelegramClientContext.Provider>
  )
}
