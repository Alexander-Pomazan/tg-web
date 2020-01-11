import { tdlibMethodsNames } from '../tdlib-constants'

import { SetEncriptionKeyRequest } from '../tdlib-types/set-encription-key-request'

export const createSetEncriptionKeyRequest = (): SetEncriptionKeyRequest => ({
  '@type': tdlibMethodsNames.checkDatabaseEncryptionKey,
})
