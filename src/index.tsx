
import React from 'react'
import { render } from 'react-dom'
import { TelegramClient } from './telegram-client'
import { TelegramApplication } from './telegram-application'

interface TelegramClientCredentials {
  apiId: number
  apiHash: string
}

const { REACT_APP_API_ID, REACT_APP_API_HASH } = process.env

if (!REACT_APP_API_ID || !REACT_APP_API_HASH) {
  throw Error('Missing credentials in enviromental variables')
}

const createTelegramClient = (
  { apiId, apiHash }: TelegramClientCredentials,
): TelegramClient => {
  if (typeof apiId !== 'number' || typeof apiHash !== 'string') {
    throw new Error('Invalid credentials')
  }

  const client = new TelegramClient(apiId, apiHash)

  return client
}

const client = createTelegramClient({
  apiId: +REACT_APP_API_ID,
  apiHash: REACT_APP_API_HASH,
})

// setInterval(() => console.log(client.send({
//   '@type': 'getAuthorizationState',
// })), 2000)

render(
  <TelegramApplication client={client} />,
  document.getElementById('root'),
)
