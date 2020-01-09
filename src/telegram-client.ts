/* eslint-disable @typescript-eslint/camelcase */
import TdClient, { TdObject } from 'tdweb'

function getBrowser(): string {
  let browser_name = ''

  const { documentMode } = (document as any) // eslint-disable-line

  const isIE = /* @cc_on!@ */ !!documentMode
  const isEdge = !isIE && !!window.styleMedia
  if (navigator.userAgent.includes('Chrome') && !isEdge) {
    browser_name = 'Chrome'
  } else if (navigator.userAgent.includes('Safari') && !isEdge) {
    browser_name = 'Safari'
  } else if (navigator.userAgent.includes('Firefox')) {
    browser_name = 'Firefox'
  } else if (navigator.userAgent.includes('MSIE') || !!documentMode === true) {
    // IF IE > 10
    browser_name = 'IE'
  } else if (isEdge) {
    browser_name = 'Edge'
  } else {
    browser_name = 'Unknown'
  }

  return browser_name
}

function getOSName(): string {
  const { userAgent } = navigator

  if (userAgent.includes('Windows NT 10.0')) return 'Windows 10'
  if (userAgent.includes('Windows NT 6.2')) return 'Windows 8'
  if (userAgent.includes('Windows NT 6.1')) return 'Windows 7'
  if (userAgent.includes('Windows NT 6.0')) return 'Windows Vista'
  if (userAgent.includes('Windows NT 5.1')) return 'Windows XP'
  if (userAgent.includes('Windows NT 5.0')) return 'Windows 2000'
  if (userAgent.includes('Mac')) return 'Mac/iOS'
  if (userAgent.includes('X11')) return 'UNIX'
  if (userAgent.includes('Linux')) return 'Linux'

  return 'Unknown'
}

export class TelegramClient {
  private client: TdClient

  constructor(api_id: number, api_hash: string) {
    this.client = new TdClient({
      mode: 'wasm',

      onUpdate: (update): void => {
        // console.log('[CLIENT UPDATE]', update)

        switch (update['@type']) {
          case 'updateAuthorizationState': {
            const authStateType = (update?.authorization_state as TdObject)?.['@type']

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

    const tdLibParams: TdObject = {
      '@type': 'setTdlibParameters',
      parameters: {
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
      },
    }

    this.send(tdLibParams)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private send = (request: any): void => {
    // console.log({ request })
    this.client.send(request)
  }

  private handleUpdates = (): void => {}

  private setEncriptionKey = (): void => {
    this.send({
      '@type': 'checkDatabaseEncryptionKey',
    })
  }

  private setPhoneNumber = (): void => {
    this.send({
      '@type': 'setAuthenticationPhoneNumber',
      phone_number: process.env.REACT_APP_PHONE_TEST_NUMBER,
    })
  }
}
