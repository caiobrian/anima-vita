import { render, screen } from '@testing-library/react'
import { LoadingScreen } from './LoadingScreen'

describe('Logo', () => {
  it('should render correctly', () => {
    render(<LoadingScreen />)

    const logo = screen.getByRole('img', { name: /Loading gif/i })
    expect(logo).toBeInTheDocument()
  })
})
