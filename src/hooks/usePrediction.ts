import { useState } from 'react'
import { Image } from '../components/pages/ImageUpload/ImageUpload'
import { OpenVisionServer } from '../config'

export type Coorindinates = {
  x1: number
  x2: number
  y1: number
  y2: number
}

export type PredictionData = {
  bbox: Coorindinates
  label?: string
  score: number
}

export type Prediction = {
  id: string
  title?: string
  description?: string
  predictions: PredictionData[]
  timestamp?: string
  url?: string
}

const usePrediction = () => {
  const [predictions, setPredictions] = useState<Prediction[]>()
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchPrediction = async (images: Image[]) => {
    try {
      setIsLoading(true)
      const allFetchCalls = images.map((image) => {
        const formData = new FormData()
        formData.append('model', 'yolov4')
        formData.append('image', image.file, image.file.name)

        return fetch(OpenVisionServer, {
          method: 'POST',
          body: formData,
        })
      })

      const fetchResults = await Promise.all(allFetchCalls)
      const results = await Promise.all(fetchResults.map((fr) => fr.json()))
      setPredictions(results as Prediction[])
      setIsLoading(false)
      return results
    } catch (error) {
      setError(String(error))
    }
    setIsLoading(false)
  }

  return { predictions, error, fetchPrediction, isLoading }
}

export default usePrediction
