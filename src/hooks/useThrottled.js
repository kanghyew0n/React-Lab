import { useEffect, useRef } from 'react'

function useThrottled(callback, delay, dependencies) {
  const timeoutRef = useRef(null)
  const lastRan = useRef(0)

  useEffect(() => {
    function throttledCallback() {
      const now = Date.now()
      if (now - lastRan.current >= delay) {
        callback()
        lastRan.current = now
      } else {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(throttledCallback, delay)
      }
    }

    throttledCallback()

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, dependencies)
}

export default useThrottled