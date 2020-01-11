import { tdlibMethodsNames } from '../tdlib-constants'
import { createSetTdParametersRequest } from './create-set-tdlib-parameters-request'
import { createSetEncriptionKeyRequest } from './create-set-encription-key-request'
import {
  createGetAuthorizationStateRequest,
} from './create-get-authorization-state-request'
import {
  createSetPhoneNumberRequest,
} from './create-set-phone-number-request'

export const createRequest = {
  [tdlibMethodsNames.setTdlibParameters]: createSetTdParametersRequest,
  [tdlibMethodsNames.checkDatabaseEncryptionKey]: createSetEncriptionKeyRequest,
  [tdlibMethodsNames.getAuthorizationState]: createGetAuthorizationStateRequest,
  [tdlibMethodsNames.setPhoneNumber]: createSetPhoneNumberRequest,
} as const
