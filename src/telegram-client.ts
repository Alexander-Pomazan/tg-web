/* eslint-disable camelcase */

import TdClient, { TdObject } from 'tdweb' // eslint-disable-line import/no-unresolved

export class TelegramClient {
  private client: TdClient

  constructor(api_id: number, api_hash: string) {
    this.client = new TdClient({ mode: 'wasm' })

    const tdLibParams: TdObject = {
      '@type': 'tdParameters',
      use_test_dc: true,
      api_id,
      api_hash
    }

    this.client.send(tdLibParams)
  }

  private send = (request: any) => {
    console.log({ request })
    this.client.send(request)
  }
}
