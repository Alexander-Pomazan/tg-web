import { useSendRequest } from './use-send-request'
import { useTelegramClient } from './use-telegram-client'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSetPhoneNumber = () => {
  const client = useTelegramClient()

  return useSendRequest(client.sendRequest.setAuthenticationPhoneNumber)
}
