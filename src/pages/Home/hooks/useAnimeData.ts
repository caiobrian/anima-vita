import { Anime, AnimeData, AnimeWithCharacters } from 'models/Anime'
import { Character, CharacterDetail } from 'models/Character'
import { useCallback, useEffect, useState } from 'react'
import { fetchAnimes } from 'services/anime.service'
import {
  fetchCharacterDetails,
  fetchCharacters
} from 'services/characters.service'

const fetchAnimeData = async (page: number): Promise<Anime[]> => {
  const { data } = await fetchAnimes(page)
  return data
}

const fetchCharactersList = async (id: number): Promise<Character[]> => {
  const data = await fetchCharacters(id)
  return data
}

const fetchCharacterDetailsData = async (
  relatedUrl: string
): Promise<CharacterDetail> => {
  const formattedUrl = relatedUrl.replace('https://kitsu.io/api/edge/', '')
  const data = await fetchCharacterDetails(formattedUrl)
  return data
}

const formatAnimeList = (animeList: Anime[]) =>
  animeList.map(({ id, attributes, links }) => ({
    id,
    attributes,
    links
  }))

const insertAnimeCharacters = (animeList: Anime[]) =>
  animeList.map(async (anime: Anime) => {
    const characters = await fetchCharactersList(anime.id)
    return {
      ...anime,
      characters
    }
  })

const fulfillAnimeCharacters = async (animeList: AnimeWithCharacters[]) =>
  animeList.map(async (anime) => {
    const charactersCompleteDetails = anime.characters.map(
      async (character) => {
        const characterDetails = await fetchCharacterDetailsData(
          character.relationships.character.links.related
        )
        return characterDetails
      }
    )

    return {
      ...anime,
      characters: await Promise.all(charactersCompleteDetails)
    }
  })

export const useAnimeData = () => {
  const [animeData, setAnimeData] = useState<AnimeData[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  const fetchAnimes = useCallback(async () => {
    try {
      setLoading(true)

      const animeList = await fetchAnimeData(page)
      const formattedAnimeList = formatAnimeList(animeList)
      const animesWithCharacters = insertAnimeCharacters(formattedAnimeList)

      const animesWithCharactersResolved = await Promise.all(
        animesWithCharacters
      )
      const animeDataFulfilled = await fulfillAnimeCharacters(
        animesWithCharactersResolved
      )
      const animeDataFulfilledResolved = await Promise.all(animeDataFulfilled)

      setAnimeData((prevState) => [...prevState, ...animeDataFulfilledResolved])
    } catch (err) {
      return null
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchAnimes()
  }, [fetchAnimes, page])

  return {
    animeData,
    loading,
    setPage,
    page
  }
}
