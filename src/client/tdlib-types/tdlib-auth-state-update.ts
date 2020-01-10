import { TdObject } from 'tdweb'
import { tdlibUpdatesTypes } from '../tdlib-constants'
import { TdlibAuthState } from './tdlib-auth-state'

export interface TdlibAuthStateUpdate extends TdObject {
  '@type': typeof tdlibUpdatesTypes.updateAuthorizationState,
  authorization_state: TdlibAuthState
}
