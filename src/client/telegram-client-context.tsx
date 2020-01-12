import { createContext } from 'react'
import { TelegramClient } from './telegram-client'

export const TelegramClientContext = createContext<TelegramClient | null>(
  null,
)

export const TelegramClientProvider = TelegramClientContext.Provider
