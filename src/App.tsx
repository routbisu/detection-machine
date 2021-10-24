import React, { useState } from 'react'
import Heading from './components/layout/Heading'
import Container from './components/layout/Container'
import Tabs from './components/Tabs/Tabs'
import ImageUpload, { Image } from './components/pages/ImageUpload/ImageUpload'
import Predictions from './components/pages/Predictions/Predictions'
import { menuItems, Pages } from './config'
import { Prediction } from './hooks/usePrediction'

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Images)
  const [images, setImages] = useState<Image[]>([])
  const [predictions, setPredictions] = useState<Prediction[]>([])
  const [newPredictions, setNewPredictions] = useState<number>(0)

  const predictionHandler = (predictions: Prediction[]) => {
    setNewPredictions(predictions.length)
    setPredictions((curr) => [...curr, ...predictions])
  }

  return (
    <Container>
      <Heading>Computer Vision Demo</Heading>
      <Tabs
        items={menuItems}
        activeItem={currentPage}
        onClick={setCurrentPage}
        newItemsTab={Pages.Predictions}
        newItems={newPredictions}
      />
      {currentPage === Pages.Images && (
        <ImageUpload images={images} setImages={setImages} onPredict={predictionHandler} />
      )}
      {currentPage === Pages.Predictions && (
        <Predictions predictions={predictions} resetPredictions={() => setNewPredictions(0)} />
      )}
    </Container>
  )
}

export default App
