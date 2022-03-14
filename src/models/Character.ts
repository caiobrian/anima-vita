interface CharacterRelationships {
  character: {
    links: {
      related: string
    }
  }
}

export interface CharacterDetail {
  attributes: {
    canonicalName: string
    description: string
    image: {
      tiny: string
      large: string
      small: string
      medium: string
      original: string
    }
    name: 'Ein'
    otherNames: string[]
  }
}

export interface Character {
  id: number
  relationships: CharacterRelationships
}

export interface CharacterResponse {
  data: Character[]
}

export interface CharacterDetailResponse {
  data: CharacterDetail
}
