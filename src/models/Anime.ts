import { Character, CharacterDetail } from './Character'

export interface AnimeAttributes {
  ageRatingGuide: string
  averageRating: string
  canonicalTitle: string
  posterImage: {
    tiny: string
    small: string
    medium: string
    large: string
    original: string
  }
  description: string
}

export interface Anime {
  id: number
  attributes: AnimeAttributes
  links: {
    next: string
    last: string
  }
}

export interface AnimeWithCharacters extends Anime {
  characters: Character[]
}

export interface AnimeResponse {
  data: Anime[]
  links: {
    next: string
    last: string
  }
}

export interface AnimeData {
  id: number
  characters: CharacterDetail[]
  attributes: AnimeAttributes
}
