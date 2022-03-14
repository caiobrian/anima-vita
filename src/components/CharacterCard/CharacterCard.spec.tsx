import { render, screen } from '@testing-library/react'

import { CharacterCard } from '.'

const characterCardData = {
  name: 'Test Name',
  description: 'Test Description',
  imageUrl: 'https://test.com/test.jpg',
  otherNames: ['Test Other Name 1', 'Test Other Name 2']
}

const NO_DESCRIPTION_FOUND = 'No description found'
const NO_IMAGE_FOUND = 'No image found'

describe('CharacterCard', () => {
  it('should render correctly', () => {
    const { container } = render(<CharacterCard {...characterCardData} />)

    expect(container).toMatchSnapshot()
  })

  it('should render character name in front card when has no imageUrl', () => {
    render(<CharacterCard {...characterCardData} imageUrl="" />)

    const name = screen.getByTestId('character-card-name')
    expect(name).toHaveTextContent(characterCardData.name)
  })

  it('should render No Image Found when has no imageUrl', () => {
    render(<CharacterCard {...characterCardData} imageUrl="" />)

    const cardFront = screen.getByTestId('character-card-front')
    expect(cardFront).toHaveTextContent(NO_IMAGE_FOUND)
  })

  it('should not render character name or No Image Found in front card when has imageUrl', () => {
    render(<CharacterCard {...characterCardData} />)

    const name = screen.getByTestId('character-card-name')
    expect(name).toHaveTextContent('')

    const cardFront = screen.getByTestId('character-card-front')
    expect(cardFront).not.toHaveTextContent(NO_IMAGE_FOUND)
  })

  it('should not render the character description and name in front card', () => {
    render(<CharacterCard {...characterCardData} />)

    const frontCard = screen.getByTestId('character-card-front')
    expect(frontCard).not.toHaveTextContent(characterCardData.description)
    expect(frontCard).not.toHaveTextContent(characterCardData.name)
  })

  it('should render the character description and name in back card', () => {
    render(<CharacterCard {...characterCardData} />)

    const backCard = screen.getByTestId('character-card-back')
    expect(backCard).toHaveTextContent(characterCardData.description)
    expect(backCard).toHaveTextContent(characterCardData.name)
  })

  it('should render No Description Found when has no description', () => {
    render(<CharacterCard {...characterCardData} description="" />)

    const cardBack = screen.getByTestId('character-card-back')
    expect(cardBack).toHaveTextContent(NO_DESCRIPTION_FOUND)
  })

  it('should not render "Also know as:" when character has no other names', () => {
    render(<CharacterCard {...characterCardData} otherNames={[]} />)

    const otherNames = screen.queryByTestId('character-othernames')
    expect(otherNames).toBeEmptyDOMElement()
  })

  it('should format other character names with "Also know as:" when has other names', () => {
    render(<CharacterCard {...characterCardData} />)

    const othernames = characterCardData.otherNames.join(', ')
    const othernamesText = screen.getByText(`Also known as: ${othernames}`)

    expect(othernamesText).toBeInTheDocument()
  })
})
