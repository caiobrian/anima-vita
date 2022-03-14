import { Logo } from '.'
import { Meta, Story } from '@storybook/react'
import { LogoProps } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  }
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Default = Template.bind({})

Default.args = {
  size: 'medium'
}
