import { TdObject } from 'tdweb'
import { ValueOf } from 'ts-essentials'
import { tdlibAuthorizationStates, tdlibUpdatesTypes } from '../tdlib-constants'

export interface TdlibAuthState extends TdObject {
  '@type': typeof tdlibUpdatesTypes.updateAuthorizationState,
  authorization_state: {
    '@type': ValueOf<typeof tdlibAuthorizationStates>,
    is_encrypted: boolean
  }
}
