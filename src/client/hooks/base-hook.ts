import { useReducer, useEffect } from 'react'
import { assertNever } from 'src/utils'

interface State {
  loading: boolean
  error: Error | null
  data: any
}

const initialState: State = {
  loading: false,
  error: null,
  data: null,
}

enum ActionType {
  Init,
  Fail,
  Done
}

interface InitAction {
  type: ActionType.Init
}

interface DoneAction {
  type: ActionType.Done
  payload: {
    data: any
  }
}

interface FailAction {
  type: ActionType.Fail
  payload: {
    error: Error
  }
}

type Action = InitAction | DoneAction | FailAction

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.Init: {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }

    case ActionType.Done: {
      return {
        error: null,
        loading: false,
        data: action.payload.data,
      }
    }

    case ActionType.Fail: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    }

    default:
      assertNever(action)
      return state
  }
}


export const useBaseHook = (): void => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => console.log(state, dispatch))
}
