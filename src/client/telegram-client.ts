/* eslint-disable @typescript-eslint/camelcase */
import TdClient, { TdError, TdObject } from 'tdweb'
import { getBrowser, getOSName, compose } from 'src/utils'
import { ClientUpdatesPubsub } from './client-updates-pubsub'
import { createRequest } from './create-request'
import { PubsubSerializeDecorator } from './pubsub-serialize-decorator'
import { updatesSerializers } from './updates-serializers'
import { AuthState } from './serialized-types/auth-state'
import { TdlibAuthStateUpdate } from './tdlib-types/tdlib-auth-state-update'
import { TdlibAuthState } from './tdlib-types/tdlib-auth-state'
import { tdlibUpdatesTypes, tdlibMethodsNames } from './tdlib-constants'

const isError = (obj: TdObject | TdError): obj is TdError => obj['@type'] === 'error'

export class TelegramClient {
  private client = new TdClient({
    mode: 'wasm',
    logVerbosityLevel: 0,
    jsLogVerbosityLevel: 'warning',
    onUpdate: (update): void => {
      switch (update['@type']) {
        case tdlibUpdatesTypes.updateAuthorizationState: {
          this.authPubSub.publish(update as TdlibAuthStateUpdate)
          break
        }

        default:
          break
      }
    },
  })

  private authPubSub = new PubsubSerializeDecorator<TdlibAuthStateUpdate, AuthState>(
    new ClientUpdatesPubsub<AuthState>(), updatesSerializers.authState,
  )

  private send = async (requestObj: TdObject) => {
    const response = await this.client.send(requestObj)
    if (isError(response)) throw new Error(`Error: ${response.code} ${response.message}`)
    return response
  }

  // TODO: find a way to create this object with a loop without breaking types
  public sendRequest = {
    [tdlibMethodsNames.getAuthorizationState]: async (): Promise<AuthState> => {
      const requestObj = createRequest.getAuthorizationState()
      const response = (await this.send(requestObj)) as TdlibAuthState

      return response['@type']
    },
    [tdlibMethodsNames.checkDatabaseEncryptionKey]:
      compose(this.send, createRequest.checkDatabaseEncryptionKey),
    [tdlibMethodsNames.setTdlibParameters]:
      compose(this.send, createRequest.setTdlibParameters),
    [tdlibMethodsNames.setAuthenticationPhoneNumber]:
      compose(this.send, createRequest.setAuthenticationPhoneNumber),
    [tdlibMethodsNames.checkAuthenticationCode]:
      compose(this.send, createRequest.checkAuthenticationCode),
    [tdlibMethodsNames.registerUser]:
      compose(this.send, createRequest.registerUser),
  }

  public subscribe = {
    auth: this.authPubSub.subscribe,
  }

  constructor(api_id: number, api_hash: string) {
    this.initialize(api_id, api_hash)
  }

  private initialize = async (api_id: number, api_hash: string): Promise<void> => {
    await this.sendRequest.setTdlibParameters({
      '@type': 'tdParameters',
      application_version: '0.0.0',
      use_test_dc: true,
      api_id,
      api_hash,
      database_directory: '/db',
      use_message_database: true,
      use_secret_chats: false,
      system_language_code: 'en',
      device_model: getBrowser(),
      system_version: getOSName(),
    })

    this.sendRequest.checkDatabaseEncryptionKey()
  }
}
