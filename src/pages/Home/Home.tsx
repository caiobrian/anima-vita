import { Logo } from 'components'
import { AnimeCardContainer, Container, LoadingGifContainer } from './styles'

import { useAnimeData } from './hooks/useAnimeData'
import { AnimeCard } from 'components/AnimeCard/AnimeCard'
import { useInfinitescroll } from 'hooks/useInfiniteScroll'
import { useEffect } from 'react'
import { LoadingScreen } from 'components/LoadingScreen'
import { LoadingGif } from 'components/LoadingGif'

const OFF_SET = 4

export const Home = () => {
  const { animeData, loading, setPage, page } = useAnimeData()
  const { setLastElement, shouldFetch } = useInfinitescroll({
    hasMore: true
  })

  useEffect(() => {
    if (shouldFetch) {
      setPage((page) => page + OFF_SET)
    }
  }, [setPage, shouldFetch])

  if (loading && page === 0) {
    return <LoadingScreen />
  }

  return (
    <Container>
      <Logo size="medium" />
      <AnimeCardContainer>
        {animeData.map((anime, index) => (
          <AnimeCard
            key={`${anime.attributes.canonicalTitle}`}
            animeCardData={anime}
            innerRef={index === animeData.length - 1 ? setLastElement : null}
          />
        ))}

        {loading && (
          <LoadingGifContainer>
            <LoadingGif width="10rem" />
          </LoadingGifContainer>
        )}
      </AnimeCardContainer>
    </Container>
  )
}
