import React from 'react'
import Section from '../../layout/Section'
import Table from '../../../components/Table/Table'
import UploadButton from '../../../components/UploadButton/UploadButton'
import Button from '../../layout/Button'
import { ButtonsContainer, PredictButtonSection } from './styles'

const imageTableHeaders: { key: keyof TableDataProps; label: string }[] = [
  { key: 'name', label: 'Name' },
  { key: 'size', label: 'File size' },
  { key: 'time', label: 'Uploaded at' },
]

type TableDataProps = {
  name: string
  size: string
  time: string
}

const tableData = [
  { name: 'Name1', size: '120', time: '23 Aug' },
  { name: 'Name1', size: '120', time: '23 Aug' },
  { name: 'Name1', size: '120', time: '23 Aug' },
  { name: 'Name1', size: '120', time: '23 Aug' },
  { name: 'Name1', size: '120', time: '23 Aug' },
  { name: 'Name1', size: '120', time: '23 Aug' },
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

      <Table<TableDataProps> headerItems={imageTableHeaders} data={tableData} />
    </Section>
  )
}

export default ImageUpload
