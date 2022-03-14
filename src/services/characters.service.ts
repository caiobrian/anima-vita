import { CharacterDetailResponse, CharacterResponse } from 'models/Character'
import { api } from './api'

export const fetchCharacters = async (animeId: number) => {
  const { data } = await api.get<CharacterResponse>(
    `anime/${animeId}/characters?page[limit]=4`
  )
  return data?.data
}

export const fetchCharacterDetails = async (characterUrl: string) => {
  const { data } = await api.get<CharacterDetailResponse>(characterUrl)
  return data?.data
}
