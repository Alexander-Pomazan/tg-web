import { TdObject } from 'tdweb'
import { tdlibMethodsNames } from '../tdlib-constants'

export interface SetPhoneNumberRequest extends TdObject {
  '@type': typeof tdlibMethodsNames.setPhoneNumber
  phone_number: string
}
