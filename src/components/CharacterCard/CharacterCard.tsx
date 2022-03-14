import {
  FlipCardBack,
  FlipCardBackAKA,
  FlipCardBackContent,
  FlipCardBackDescription,
  FlipCardBackTitle,
  FlipCardContainer,
  FlipCardFront,
  FlipCardInner
} from './styles'

export type CharacterCardProps = {
  imageUrl: string
  name: string
  otherNames: string[]
  description: string
}

const NO_DESCRIPTION_FOUND = 'No description found'
const NO_IMAGE_FOUND = 'No image found'

const handleOtherNames = (otherNames: string[]) => {
  if (!otherNames.length) {
    return ''
  }

  return `Also known as: ${otherNames.join(', ')}`
}

export const CharacterCard = ({
  imageUrl,
  name,
  otherNames,
  description
}: CharacterCardProps) => (
  <FlipCardContainer>
    <FlipCardInner>
      <FlipCardFront data-testid="character-card-front" imageUrl={imageUrl}>
        <h2 data-testid="character-card-name">{imageUrl ? '' : name}</h2>
        <p>{imageUrl ? '' : NO_IMAGE_FOUND}</p>
      </FlipCardFront>

      <FlipCardBack data-testid="character-card-back">
        <FlipCardBackContent>
          <FlipCardBackTitle>{name}</FlipCardBackTitle>
          <FlipCardBackAKA data-testid="character-othernames">
            {handleOtherNames(otherNames)}
          </FlipCardBackAKA>
          <FlipCardBackDescription>
            {description || NO_DESCRIPTION_FOUND}
          </FlipCardBackDescription>
        </FlipCardBackContent>
      </FlipCardBack>
    </FlipCardInner>
  </FlipCardContainer>
)
