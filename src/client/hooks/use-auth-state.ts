
import { useReducer, useEffect } from 'react'
import { AuthState } from '../serialized-types/auth-state'
import { createReducer } from './use-data-reducer'

const [authReducer, initialState] = createReducer<AuthState>()

export const useAuthState = () => {
  const [authState, dispatch] = useReducer(authReducer, initialState)

  return authState
}
