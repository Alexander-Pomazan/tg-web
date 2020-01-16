import { useRef, useEffect } from 'react'

export const useIsUnmountedRef = () => {
  const unmountedRef = useRef(false)

  useEffect(() => () => {
    unmountedRef.current = true
  }, [])

  return unmountedRef
}
