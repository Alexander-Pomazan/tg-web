import { GetChatsRequest } from '../tdlib-types/get-chats-request'
import { tdlibMethodsNames } from '../tdlib-constants'

const DEFAULT_OFFSET_ORDER = '9223372036854775807'

export const createGetChatsRequest = (
  offset_order = DEFAULT_OFFSET_ORDER,
  offset_chat_id = 0,
  limit = 15,
): GetChatsRequest => ({
  '@type': tdlibMethodsNames.getChats,
  offset_order,
  offset_chat_id,
  limit,
})
