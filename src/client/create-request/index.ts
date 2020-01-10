import { tdlibMethodsNames } from '../tdlib-constants'

import { createSetTdParametersRequest } from './create-set-tdlib-parameters-request'
import { createSetEncriptionKeyRequest } from './create-set-encription-key-request'

export const createRequest = {
  [tdlibMethodsNames.setTdlibParameters]: createSetTdParametersRequest,
  [tdlibMethodsNames.checkDatabaseEncryptionKey]: createSetEncriptionKeyRequest,
}
