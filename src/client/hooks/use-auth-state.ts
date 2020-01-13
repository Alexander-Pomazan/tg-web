
import { useReducer, useEffect } from 'react'
import { AuthState } from '../serialized-types/auth-state'
import { useTelegramClient } from './use-telegram-client'
import { createDataReducer, ActionType } from './create-data-reducer'

const [authReducer, initialState] = createDataReducer<AuthState>()

export const useAuthState = () => {
  const client = useTelegramClient()

  const [state, dispatch] = useReducer(authReducer, initialState)


  useEffect(() => {
    const unsubscribe = client.subscribe.auth(
      (newAuthState: AuthState): void => dispatch({
        type: ActionType.Done,
        payload: { data: newAuthState },
      }),
    )

    const getAuthState = async (): Promise<void> => {
      dispatch({ type: ActionType.Init })

      try {
        const newAuthState = await client.sendRequest.getAuthorizationState()

        dispatch({
          type: ActionType.Done,
          payload: { data: newAuthState },
        })
      } catch (error) {
        dispatch({
          type: ActionType.Fail,
          payload: { error },
        })
      }
    }

    getAuthState()

    return unsubscribe
  }, [client])


  return {
    authState: state.data,
    loading: state.loading,
    error: state.error,
  }
}
