import { CharacterCard, PosterImageCard } from 'components'
import { AnimeData } from 'models/Anime'
import { Card, CharacteresList } from './styles'

type AnimeCardProps = {
  animeCardData: AnimeData
  innerRef: React.Ref<any>
}

export const AnimeCard = ({ animeCardData, innerRef }: AnimeCardProps) => {
  return (
    <Card ref={innerRef}>
      <PosterImageCard
        imageUrl={animeCardData.attributes.posterImage.medium}
        title={animeCardData.attributes.canonicalTitle}
        rating={animeCardData.attributes.averageRating}
      />

      <CharacteresList>
        {animeCardData.characters.map(
          ({
            attributes: { canonicalName, image, otherNames, description, name }
          }) => (
            <CharacterCard
              key={`${name} ${canonicalName}`}
              imageUrl={image?.original || image?.medium}
              name={canonicalName || name}
              otherNames={otherNames}
              description={description}
            />
          )
        )}
      </CharacteresList>
    </Card>
  )
}
