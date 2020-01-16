import { assertNever } from 'src/utils'

export interface State<DataType> {
  readonly loading: boolean
  readonly error: Error | null
  readonly data: DataType | null
}


export enum ActionType {
  Init,
  Fail,
  Done
}

export interface InitAction {
  type: ActionType.Init
}

export interface DoneAction<DataType> {
  type: ActionType.Done
  payload: {
    data: DataType
  }
}

export interface FailAction {
  type: ActionType.Fail
  payload: {
    error: Error
  }
}

type Action<DataType> = Readonly<InitAction | DoneAction<DataType> | FailAction>


type Reducer<DataType> = (
  (state: State<DataType> | undefined, action: Action<DataType>) => State<DataType>
)

export const createDataReducer = <DataType>(
  initialData: DataType | null = null,
): [Reducer<DataType>, State<DataType>] => {
  const initialState: State<DataType> = {
    loading: true,
    error: null,
    data: initialData,
  }

  const reducer = (
    state = initialState,
    action: Action<DataType>,
  ): State<DataType> => {
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

  return [reducer, initialState]
}
