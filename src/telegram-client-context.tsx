import React from 'react'
import { TelegramClient } from './telegram-client'

export const TelegramClientContext = React.createContext<TelegramClient>(
  {} as TelegramClient,
)
