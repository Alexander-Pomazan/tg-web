import { TdlibAuthState } from '../tdlib-types/tdlib-auth-state'
import { AuthState } from '../serialized-types/auth-state'

export const serializeAuthState = (authState: TdlibAuthState): AuthState => {
  // eslint-disable-next-line @typescript-eslint/camelcase
  const { authorization_state } = authState

  return authorization_state['@type']
}
