import { TdlibMethodNames } from '../tdlib-method-names'

export interface TdParameters {
  '@type': 'tdParameters'
  use_test_dc: boolean
  api_id: number
  api_hash: string
  system_language_code: string
  device_model: string
  system_version: string
  application_version: string
  use_secret_chats: boolean
  use_message_database: true
  database_directory: string
  use_file_database?: boolean
  files_directory?: string
}

interface SetTdParamsRequest {
  '@type': TdlibMethodNames.SetTdlibParameters
  parameters: TdParameters
}

export const createSetTdParametersRequest = (
  tdParameters: TdParameters,
): SetTdParamsRequest => ({
  '@type': TdlibMethodNames.SetTdlibParameters,
  parameters: tdParameters,
})
