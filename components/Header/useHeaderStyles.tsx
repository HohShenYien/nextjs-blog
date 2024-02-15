import { clsx } from 'clsx'
import { CSSProperties, useEffect, useMemo, useState } from 'react'

const useHeaderStyles = (): { style: CSSProperties; className: string } => {
  const [{ prev, cur }, setScrollPos] = useState({
    prev: 0,
    cur: 0,
  })

  useEffect(() => {
    const onScroll = () => {
      setScrollPos({ cur: window.scrollY, prev: cur })
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [cur, prev])

  const { scrollAfter100, goingDown } = useMemo(() => {
    return {
      scrollAfter100: cur > 50,
      goingDown: cur > prev,
    }
  }, [prev, cur])

  const scrollAffectedStyles = useMemo(() => {
    return {
      style: {
        backdropFilter: `blur(${scrollAfter100 ? 8 : 0}px)`,
        transform: `translateY(${goingDown && scrollAfter100 ? '-100%' : '0'})`,
      },
      className: clsx({
        'py-4 bg-primary-100/50 dark:bg-primary-900/25': scrollAfter100,
        'py-6': !scrollAfter100,
      }),
    }
  }, [scrollAfter100, goingDown])

  return {
    style: {
      ...scrollAffectedStyles.style,
      zIndex: 1100,
      transition: 'all ease-in 200ms',
    },
    className: clsx(scrollAffectedStyles.className, 'fixed top-0 left-0 right-0'),
  }
}
export default useHeaderStyles
