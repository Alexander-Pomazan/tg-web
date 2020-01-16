import { tdlibMethodsNames } from '../tdlib-constants'

import {
  GetAuthorizationStateRequest,
} from '../tdlib-types/check-authentication-code-request'

export const createCheckAuthenticationCodeRequest = (
  code: string | number,
): GetAuthorizationStateRequest => ({
  '@type': tdlibMethodsNames.checkAuthenticationCode,
  code,
})
