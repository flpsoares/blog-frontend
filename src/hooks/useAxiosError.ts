import { useEffect, useState } from "react";

import ModalEvents from '../events/ModalEvents'

export function useAxiosError() {
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    ModalEvents.on('currentError', setMessage)
    return () => {
      ModalEvents.off('currentError', setMessage)
    }
  }, [])

  return {message,}
}

