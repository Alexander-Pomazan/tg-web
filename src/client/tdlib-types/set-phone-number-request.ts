import { TdObject } from 'tdweb'
import { tdlibMethodsNames } from '../tdlib-constants'

export interface SetPhoneNumberRequest extends TdObject {
  '@type': typeof tdlibMethodsNames.setAuthenticationPhoneNumber
  phone_number: string
}
