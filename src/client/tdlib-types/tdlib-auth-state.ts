import { TdObject } from 'tdweb'
import { ValueOf } from 'ts-essentials'
import { tdlibAuthorizationStates } from '../tdlib-constants'

export interface TdlibAuthState extends TdObject {
  '@type': ValueOf<typeof tdlibAuthorizationStates>,
  is_encrypted: boolean
}
