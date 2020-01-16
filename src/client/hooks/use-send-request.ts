import { useCallback, useState } from 'react'
import { useIsUnmountedRef } from './use-is-unmounted-ref'
// eslint-disable-next-line
export const useSendRequest = <T extends unknown[], R>(
  sendRequest: (...args: T) => Promise<R>,
): readonly [(...args: T) => Promise<R>, { loading: boolean }] => {
  const isUnmountedRef = useIsUnmountedRef()

  const [isLoading, setLoading] = useState(false)

  const makeRequest = useCallback(async (...args: T) => {
    setLoading(true)

    const result = await sendRequest(...args)

    if (!isUnmountedRef.current) setLoading(false)

    return result
  }, [isUnmountedRef, sendRequest])

  return [makeRequest, { loading: isLoading }] as const
}
