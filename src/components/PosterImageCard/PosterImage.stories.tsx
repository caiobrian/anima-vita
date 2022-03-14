import { Meta, Story } from '@storybook/react'
import { PosterImageCardProps } from './PosterImageCard'
import { PosterImageCard } from '.'
import FallbackImage from 'assets/img/fallback.png'

export default {
  title: 'PosterImageCard',
  component: PosterImageCard
} as Meta

const Template: Story<PosterImageCardProps> = (args) => (
  <PosterImageCard {...args} />
)

export const Default = Template.bind({})

Default.args = {
  imageUrl: FallbackImage,
  title: 'Title',
  rating: '8.1'
}
