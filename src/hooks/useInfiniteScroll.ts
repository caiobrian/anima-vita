import { useEffect, useState } from 'react'

type InfinitescrollProps = {
  hasMore: boolean
}

export const useInfinitescroll = ({ hasMore }: InfinitescrollProps) => {
  const [lastElement, setLastElement] = useState(null)
  const [shouldFetch, setShouldFetch] = useState(false)

  const observer = new IntersectionObserver(
    ([component]) => {
      setShouldFetch(component.isIntersecting && hasMore)
    },
    {
      threshold: 0.5
    }
  )

  useEffect(() => {
    if (lastElement) {
      observer.observe(lastElement)
    }

    return () => {
      if (lastElement) {
        observer.unobserve(lastElement)
      }
    }
  }, [lastElement])

  return {
    setLastElement,
    shouldFetch
  }
}
