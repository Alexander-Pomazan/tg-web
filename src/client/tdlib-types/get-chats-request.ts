import { TdObject } from 'tdweb'
import { tdlibMethodsNames } from '../tdlib-constants'

export interface GetChatsRequest extends TdObject {
  '@type': typeof tdlibMethodsNames.getChats
  offset_order: string;
  offset_chat_id: number;
  limit: number;
}
