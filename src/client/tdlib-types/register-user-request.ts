import { TdObject } from 'tdweb'
import { tdlibMethodsNames } from '../tdlib-constants'

export interface RegisterUserRequest extends TdObject {
  '@type': typeof tdlibMethodsNames.registerUser
  first_name: string
  last_name: string
}
