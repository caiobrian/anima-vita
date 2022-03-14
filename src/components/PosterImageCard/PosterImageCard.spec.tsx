import { render, screen } from '@testing-library/react'
import { PosterImageCard } from './PosterImageCard'

const posterImageCardData = {
  imageUrl: 'https://test.com/test.jpg',
  title: 'Anime Title',
  rating: '8.6'
}

describe('PosterImageCard', () => {
  it('should render correctly', () => {
    const { container } = render(<PosterImageCard {...posterImageCardData} />)

    expect(container).toMatchSnapshot()
  })
})
