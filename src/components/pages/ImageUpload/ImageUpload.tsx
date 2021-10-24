import React, { useState } from 'react'
import Section from '../../layout/Section'
import Table from '../../../components/Table/Table'
import UploadButton from '../../../components/UploadButton/UploadButton'
import Button from '../../layout/Button'
import { v4 as uuidv4 } from 'uuid'
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

const ImageUpload: React.FC = () => {
  const [images, setImages] = useState<TableDataProps[]>([])

  const handleFileUpload = (files: FileList | null) => {
    const uploadedFiles = files
      ? Array.from(files).map(({ name, lastModified, size }: any) => ({ id: uuidv4(), name, time: lastModified, size }))
      : []

    setImages(uploadedFiles)
  }

  return (
    <Section>
      <ButtonsContainer>
        <UploadButton onChange={handleFileUpload}>Upload Image(s)</UploadButton>

        <PredictButtonSection>
          <Button variant="secondary" disabled>
            Predict
          </Button>
          <Button variant="danger" disabled>
            Delete
          </Button>
        </PredictButtonSection>
      </ButtonsContainer>

      <Table<TableDataProps>
        noDataText="No images uploaded"
        headerItems={imageTableHeaders}
        data={images}
        onSelect={(rows) => console.log(rows)}
        onActionCall={(id) => console.log('id', id)}
      />
    </Section>
  )
}

export default ImageUpload
