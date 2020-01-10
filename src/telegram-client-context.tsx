import React from 'react'
import { TelegramClient } from './client'

export const TelegramClientContext = React.createContext<TelegramClient>(
  {} as TelegramClient,
)
