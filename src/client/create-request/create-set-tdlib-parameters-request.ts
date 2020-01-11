import { tdlibMethodsNames } from '../tdlib-constants'

import { TdlibParameters } from '../tdlib-types/tdlib-parameters'
import { SetTdlibParametersRequest } from '../tdlib-types/set-tdlib-parameters-request'

export const createSetTdParametersRequest = (
  tdParameters: TdlibParameters,
): SetTdlibParametersRequest => ({
  '@type': tdlibMethodsNames.setTdlibParameters,
  parameters: tdParameters,
})
