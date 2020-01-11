import { TdObject } from 'tdweb'
import { tdlibMethodsNames } from '../tdlib-constants'

export interface SetEncriptionKeyRequest extends TdObject {
  '@type': typeof tdlibMethodsNames.checkDatabaseEncryptionKey
}
