/* eslint-disable @typescript-eslint/camelcase */
import { RegisterUserRequest } from '../tdlib-types/register-user-request'
import { tdlibMethodsNames } from '../tdlib-constants'

export const createRegisterUserRequest = (
  first_name: string,
  last_name: string,
): RegisterUserRequest => ({
  '@type': tdlibMethodsNames.registerUser,
  first_name,
  last_name,
})
