import React, { useState, useEffect } from 'react'
import { Prediction, PredictionData } from '../../../hooks/usePrediction'
import Button from '../../layout/Button'
import Footer from '../../layout/Footer'
import Heading from '../../layout/Heading'
import Modal from '../../layout/Modal/Modal'
import { convertCoordsToPercentage, getImageDimensions } from '../../../utils/imageProcessor'
import { ImageWrapper, Box, Label } from './styles'

type PredictionVisualizerProps = {
  prediction: Prediction
  onClose: () => void
}

const PredictionVisualizer: React.FC<PredictionVisualizerProps> = ({ prediction, onClose }) => {
  const [predictionsWithPercentage, setPredictionsWithPercentage] = useState<PredictionData[]>([])

  const { description, url, predictions } = prediction

  // Compute image dimensions of component load
  useEffect(() => {
    if (url && predictions && predictions.length)
      getImageDimensions(url, (dimensions) => {
        const pred = predictions.map(({ bbox, label, score }) => ({
          bbox: convertCoordsToPercentage(bbox, dimensions),
          label,
          score: score * 100,
        }))

        setPredictionsWithPercentage(pred)
      })
  }, [url, predictions])

  return (
    <Modal width="auto" height="auto">
      <Heading>Visualization</Heading>
      <ImageWrapper>
        <img src={url} alt={description} />
        {predictionsWithPercentage &&
          predictionsWithPercentage.map(({ bbox, label, score }, idx) => (
            <Box
              style={{
                top: `${bbox.y1}%`,
                left: `${bbox.x1}%`,
                width: `${bbox.x2 - bbox.x1}%`,
                height: `${bbox.y2 - bbox.y1}%`,
              }}
            >
              <Label>
                {label} ({idx + 1}): {score}%
              </Label>
            </Box>
          ))}
      </ImageWrapper>
      <Footer>
        <Button variant="primary" onClick={onClose}>
          Close
        </Button>
      </Footer>
    </Modal>
  )
}

export default PredictionVisualizer
