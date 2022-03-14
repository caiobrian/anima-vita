import { AnimeResponse } from 'models/Anime'
import { api } from './api'

export const fetchAnimes = async (page: number) => {
  const { data } = await api.get<AnimeResponse>(
    `anime?page[limit]=4&page[offset]=${page}`
  )

  return data
}
