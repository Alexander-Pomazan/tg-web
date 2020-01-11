import { TdlibAuthStateUpdate } from '../tdlib-types/tdlib-auth-state-update'
import { AuthState } from '../serialized-types/auth-state'

export const serializeAuthStateUpdate = (authState: TdlibAuthStateUpdate): AuthState => {
  // eslint-disable-next-line @typescript-eslint/camelcase
  const { authorization_state } = authState

  return authorization_state['@type']
}
