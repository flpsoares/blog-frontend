import { useEffect, useMemo, useState } from "react";

import ModalEvents from '../events/ModalEvents'

export function useAxiosError() {
  const [message, setMessage] = useState<string>()
  const isError = useMemo(() => {
    return message && message.length > 0
  }, [message])

  useEffect(() => {
    ModalEvents.on('currentError', setMessage)
    return () => {
      ModalEvents.off('currentError', setMessage)
    }
  }, [])

  return {message, isError}
}

