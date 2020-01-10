/* eslint-disable @typescript-eslint/camelcase */
import TdClient, { TdObject } from 'tdweb'
import { getBrowser, getOSName } from 'src/utils'
import { ClientUpdatesPubsub } from './client-updates-pubsub'
import { createSetTdParametersRequest } from './request-creators'

export class TelegramClient {
  private client: TdClient

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public authPub: ClientUpdatesPubsub<any> = new ClientUpdatesPubsub<any>()

  constructor(api_id: number, api_hash: string) {
    this.client = new TdClient({
      mode: 'wasm',
      // logVerbosityLevel: 0,
      jsLogVerbosityLevel: 'debug',
      onUpdate: (update): void => {
        // eslint-disable-next-line no-console
        console.log('[CLIENT UPDATE]', update)

        switch (update['@type']) {
          case 'updateAuthorizationState': {
            const authStateType = (update?.authorization_state as TdObject)?.['@type']
            this.authPub.publish(authStateType)

            if (authStateType === 'authorizationStateWaitEncryptionKey') {
              return this.setEncriptionKey()
            }

            if (authStateType === 'authorizationStateWaitPhoneNumber') {
              return this.setPhoneNumber()
            }

            break
          }

          default:
            break
        }
      },
    })

    const tdLibParams = createSetTdParametersRequest({
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

    this.send(tdLibParams)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  send = (request: any): any => this.client.send(request)

  private handleUpdates = (): void => {}

  private setEncriptionKey = (): void => {
    this.send({
      '@type': 'checkDatabaseEncryptionKey',
    })
  }

  private setPhoneNumber = (): void => {
    // this.send({
    //   '@type': 'setAuthenticationPhoneNumber',
    //   phone_number: process.env.REACT_APP_PHONE_TEST_NUMBER,
    // })
  }
}
