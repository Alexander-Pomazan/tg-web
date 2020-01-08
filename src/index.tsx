import React from 'react'
import { render } from 'react-dom'

import { App } from './App'
import { TelegramClient } from './telegram-client'

const { REACT_APP_API_ID, REACT_APP_API_HASH } = process.env

// eslint-disable-next-line prettier/prettier
if (!REACT_APP_API_ID || !REACT_APP_API_HASH) throw Error('Credentials were not provided')

const client = new TelegramClient(+REACT_APP_API_ID, REACT_APP_API_HASH)
console.log(client)

render(<App />, document.getElementById('root'))
