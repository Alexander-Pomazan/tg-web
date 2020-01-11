
import React from 'react'
import ReactDOM from 'react-dom'
import { TelegramClient } from 'src/client'
import { TelegramApplication } from './telegram-application'

const { REACT_APP_API_ID, REACT_APP_API_HASH } = process.env

if (!REACT_APP_API_ID || !REACT_APP_API_HASH) {
  throw Error('Missing credentials in enviromental variables')
}

const client = new TelegramClient(+REACT_APP_API_ID, REACT_APP_API_HASH)

ReactDOM.render(
  <TelegramApplication client={client} />,
  document.getElementById('root'),
)
