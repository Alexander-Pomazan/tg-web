import { tdlibMethodsNames } from '../tdlib-constants'

import {
  GetAuthorizationStateRequest,
} from '../tdlib-types/get-authorization-state-request'

export const createGetAuthorizationStateRequest = (): GetAuthorizationStateRequest => ({
  '@type': tdlibMethodsNames.getAuthorizationState,
})
