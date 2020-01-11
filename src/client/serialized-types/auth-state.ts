import { ValueOf } from 'ts-essentials'
import { tdlibAuthorizationStates } from '../tdlib-constants'

export type AuthState = ValueOf<typeof tdlibAuthorizationStates>
