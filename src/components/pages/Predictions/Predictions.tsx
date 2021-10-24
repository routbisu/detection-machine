import React, { useEffect, useState } from 'react'
import { Prediction } from '../../../hooks/usePrediction'
import Section from '../../layout/Section'
import Table from '../../Table/Table'
import PredictionVisualizer from './PredictionVisualizer'

type PredictionsProp = {
  predictions?: Prediction[]
  resetPredictions: () => void
}

const predictionTableHeaders: any = [
  { key: 'title', label: 'Title' },
  { key: 'description', label: 'Description' },
  { key: 'timestamp', label: 'Processed at' },
  { actionButtonText: 'View' },
]

const Predictions: React.FC<PredictionsProp> = ({ resetPredictions, predictions }) => {
  useEffect(() => {
    resetPredictions()
  }, [resetPredictions])

  const [selectedPrediction, setSelectedPrediction] = useState<Prediction>()

  return (
    <Section>
      <Table<Prediction>
        noDataText="No predictions available"
        headerItems={predictionTableHeaders}
        data={predictions}
        onActionCall={(id) => setSelectedPrediction(predictions?.find((prediction) => prediction.id === id))}
      />
      {selectedPrediction && (
        <PredictionVisualizer prediction={selectedPrediction} onClose={() => setSelectedPrediction(undefined)} />
      )}
    </Section>
  )
}

export default Predictions
