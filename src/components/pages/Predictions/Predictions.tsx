import React, { useEffect } from 'react'
import { Prediction } from '../../../hooks/usePrediction'
import Section from '../../layout/Section'
import Table from '../../Table/Table'

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

  return (
    <Section>
      <Table<Prediction>
        noDataText="No images uploaded"
        headerItems={predictionTableHeaders}
        data={predictions}
        onActionCall={(id) => console.log(id)}
      />
    </Section>
  )
}

export default Predictions
