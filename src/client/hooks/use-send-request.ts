import { useCallback, useState } from 'react'

// eslint-disable-next-line
export const useSendRequest = (sendRequest: any) => {
  const [isLoading, setLoading] = useState(false)

  const makeRequest = useCallback(async (...args) => {
    setLoading(true)

    const result = await sendRequest(...args)

    setLoading(false)

    return result
  }, [sendRequest])

  return [makeRequest, { loading: isLoading }] as const
}
