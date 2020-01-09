import { useContext } from 'react'
import { TelegramClientContext } from './telegram-client-context'
import { TelegramClient } from './telegram-client'

export const useTelegramClient = (): TelegramClient => useContext(TelegramClientContext)
