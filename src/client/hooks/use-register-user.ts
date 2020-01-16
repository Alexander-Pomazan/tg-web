import { useSendRequest } from './use-send-request'
import { useTelegramClient } from './use-telegram-client'

export const useRegisterUser = () => {
  const client = useTelegramClient()

  return useSendRequest(client.sendRequest.registerUser)
}
