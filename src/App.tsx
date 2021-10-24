import React from 'react'

import Heading from './components/layout/Heading'
import Container from './components/layout/Container'
import Tabs from './components/Tabs/Tabs'
import ImageUpload from './components/pages/ImageUpload/ImageUpload'
import { menuItems } from './config'

const App: React.FC = () => {
  return (
    <Container>
      <Heading>Computer Vision Demo</Heading>
      <Tabs items={menuItems} activeItem="IMAGES" />
      <ImageUpload />
    </Container>
  )
}

export default App
