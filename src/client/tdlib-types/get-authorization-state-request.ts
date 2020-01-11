import { TdObject } from 'tdweb'
import { tdlibMethodsNames } from '../tdlib-constants'

export interface GetAuthorizationStateRequest extends TdObject {
  '@type': typeof tdlibMethodsNames.getAuthorizationState
}
