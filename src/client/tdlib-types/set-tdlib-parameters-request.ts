import { tdlibMethodsNames } from '../tdlib-constants'
import { TdlibParameters } from './tdlib-parameters'

export interface SetTdlibParametersRequest {
  '@type': typeof tdlibMethodsNames.setTdlibParameters
  parameters: TdlibParameters
}
