import { render } from '@testing-library/react'
import { Logo } from './Logo'

describe('Logo', () => {
  it('should render correctly', () => {
    const { container } = render(<Logo size="medium" />)

    expect(container).toMatchSnapshot()
  })
})
