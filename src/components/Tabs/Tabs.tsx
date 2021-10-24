import React from 'react'
import { Tab, TabsContainer } from './styles'

import { MenuItem } from '../../config'

export type TabProps = {
  items: MenuItem[]
  activeItem?: string
}

const Tabs: React.FC<TabProps> = ({ items, activeItem }) => {
  return (
    <TabsContainer>
      {items.map(({ key, label }) => (
        <Tab key={key} isActive={activeItem === key}>
          {label}
        </Tab>
      ))}
    </TabsContainer>
  )
}

export default Tabs
