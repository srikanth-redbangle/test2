import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const useFilterObserver = (props = {}) => {
  const { ref, inView } = useInView(props)
  const [state, setState] = useState('closed')

  const onClose = () => {
    // window.document.body.style.overflow = 'auto'
    setState('closed')
  }
  const onOpen = () => {
    setState('open')
  }
  useEffect(() => {
    if (!inView) {
      onClose()
    }
  }, [inView])
  return {
    ref,
    inView,
    state,
    onClose,
    onOpen,
  }
}
