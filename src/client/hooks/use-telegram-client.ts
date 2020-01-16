import { useContext } from 'react'
import { TelegramClient } from '../telegram-client'
import { TelegramClientContext } from '../telegram-client-context'

export const useTelegramClient = (): TelegramClient => {
  const client = useContext(TelegramClientContext)

  if (client === null) {
    throw new Error('Telegram client was not provided by the context')
  }

  return client
}
