import { TdObject } from 'tdweb'
import { tdlibMethodsNames } from '../tdlib-constants'
import { TdlibParameters } from './tdlib-parameters'

export interface SetTdlibParametersRequest extends TdObject {
  '@type': typeof tdlibMethodsNames.setTdlibParameters
  parameters: TdlibParameters
}
