import { CharacterCard } from '.'
import FallbackImage from 'assets/img/fallback.png'

export default {
  title: 'CharacterCard',
  component: CharacterCard
}

const Template = () => (
  <CharacterCard
    description="Test Description"
    imageUrl={FallbackImage}
    name="Character"
    otherNames={['Other Name 1', 'Other Name 2']}
  />
)

export const Default = Template.bind({})
