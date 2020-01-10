import { useContext } from 'react'
import { TelegramClient } from 'src/client'
import { TelegramClientContext } from './telegram-client-context'

export const useTelegramClient = (): TelegramClient => useContext(TelegramClientContext)
