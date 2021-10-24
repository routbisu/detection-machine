import React from 'react'
import { Tab, TabsContainer, Tag } from './styles'
import { MenuItem, Pages } from '../../config'

export type TabProps = {
  items: MenuItem[]
  activeItem?: Pages
  onClick: (page: Pages) => void
  newItemsTab?: Pages
  newItems?: number
}

const Tabs: React.FC<TabProps> = ({ items, activeItem, onClick, newItems, newItemsTab }) => {
  return (
    <TabsContainer>
      {items.map(({ key, label }) => (
        <Tab key={key} isActive={activeItem === key} onClick={() => onClick(key)}>
          {label}
          {newItemsTab === key && newItems !== undefined && newItems > 0 && (
            <Tag isActive={activeItem === key}>{newItems}</Tag>
          )}
        </Tab>
      ))}
    </TabsContainer>
  )
}

export default Tabs
