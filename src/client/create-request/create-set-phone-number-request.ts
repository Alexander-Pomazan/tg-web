import { tdlibMethodsNames } from '../tdlib-constants'
import { SetPhoneNumberRequest } from '../tdlib-types/set-phone-number-request'

export const createSetPhoneNumberRequest = (
  phoneNumber: string,
): SetPhoneNumberRequest => ({
  '@type': tdlibMethodsNames.setAuthenticationPhoneNumber,
  phone_number: phoneNumber,
})
