import React from 'react'
import Section from '../../layout/Section'
import Table from '../../../components/Table/Table'
import UploadButton from '../../../components/UploadButton/UploadButton'
import Button from '../../layout/Button'
import { ButtonsContainer, PredictButtonSection } from './styles'

const imageTableHeaders: any = [
  { key: 'name', label: 'Name' },
  { key: 'size', label: 'File size' },
  { key: 'time', label: 'Uploaded at' },
  { actionButtonText: 'Predict' },
]

type TableDataProps = {
  id: string
  name: string
  size: string
  time: string
}

const tableData = [
  { id: '1', name: 'Name1', size: '120', time: '23 Aug' },
  { id: '2', name: 'Name1', size: '120', time: '23 Aug' },
  { id: '3', name: 'Name1', size: '120', time: '23 Aug' },
  { id: '4', name: 'Name1', size: '120', time: '23 Aug' },
  { id: '5', name: 'Name1', size: '120', time: '23 Aug' },
  { id: '6', name: 'Name1', size: '120', time: '23 Aug' },
]

const ImageUpload: React.FC = () => {
  return (
    <Section>
      <ButtonsContainer>
        <UploadButton onChange={(files) => console.log('files', files)}>Upload Image(s)</UploadButton>
        <PredictButtonSection>
          <Button variant="secondary" disabled>
            Predict
          </Button>
          <Button variant="danger" disabled>
            Delete
          </Button>
        </PredictButtonSection>
      </ButtonsContainer>

      <Table<TableDataProps> headerItems={imageTableHeaders} data={tableData} onSelect={(rows) => console.log(rows)} />
    </Section>
  )
}

export default ImageUpload
