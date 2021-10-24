import React, { useState } from 'react'
import Section from '../../layout/Section'
import Table from '../../../components/Table/Table'
import UploadButton from '../../../components/UploadButton/UploadButton'
import Modal from '../../../components/layout/Modal/Modal'
import MessageBox from '../../layout/MessageBox'
import Footer from '../../layout/Footer'
import { TextInput } from '../../../components/layout/Form'
import Button from '../../layout/Button'
import usePrediction, { Prediction } from '../../../hooks/usePrediction'
import { v4 as uuidv4 } from 'uuid'
import { ButtonsContainer, PredictButtonSection } from './styles'
import Heading from '../../layout/Heading'

const imageTableHeaders: any = [
  { key: 'name', label: 'Name' },
  { key: 'size', label: 'File size' },
  { key: 'time', label: 'Uploaded at' },
  { actionButtonText: 'Predict' },
]

export type Image = {
  id: string
  name: string
  size: string
  time: string
  url: string
  file: File // The complete file object for upload to the server
}

type ImageUploadProps = {
  onPredict?: (predictions: Prediction[]) => void
  images: Image[]
  setImages: (images: Image[]) => any
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onPredict, images, setImages }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false)
  const [selectedImages, setSelectedImages] = useState<Image[]>([])

  const { error, isLoading, fetchPrediction } = usePrediction()

  const handleFileUpload = (files: FileList | null) => {
    const uploadedFiles: Image[] = files
      ? Array.from(files).map((file: any) => ({
          id: uuidv4(),
          name: file.name,
          time: file.lastModified,
          size: file.size,
          url: URL.createObjectURL(file),
          file: file,
        }))
      : []

    // Append to the list of images
    setImages([...images, ...uploadedFiles])
  }

  const deleteHandler = () => {
    setImages(images.filter((image) => !selectedRows.includes(image.id)))
  }

  const predictHandler = async (evt: { preventDefault: () => void }) => {
    evt.preventDefault()

    const results = await fetchPrediction(selectedImages)
    if (results) {
      setIsSuccessful(true)
      setTitle('')
      setDescription('')

      const predictions: Prediction[] = results.map((result, idx) => ({
        ...result,
        id: selectedImages[idx].id,
        title,
        description,
        timestamp: Date.now(),
        url: selectedImages[idx].url,
      }))

      if (onPredict) onPredict(predictions)
    }
  }

  const openConfirmation = (id?: string, isMultiple?: boolean) => {
    setShowConfirmation(true)

    // Add selected images to a state variable
    if (isMultiple) {
      setSelectedImages(images.filter((image) => selectedRows.includes(image.id)))
    } else if (id) {
      setSelectedImages(images.filter((image) => image.id === id))
    }
  }

  return (
    <Section>
      <ButtonsContainer>
        <UploadButton onChange={handleFileUpload}>Upload Image(s)</UploadButton>

        <PredictButtonSection>
          <Button variant="secondary" disabled={selectedRows.length < 1} onClick={() => openConfirmation('', true)}>
            Predict
          </Button>
          <Button variant="danger" disabled={selectedRows.length < 1} onClick={deleteHandler}>
            Delete
          </Button>
        </PredictButtonSection>
      </ButtonsContainer>

      <Table<Image>
        noDataText="No images uploaded"
        headerItems={imageTableHeaders}
        data={images}
        onSelect={setSelectedRows}
        onActionCall={(id) => openConfirmation(id)}
      />

      {showConfirmation && (
        <Modal height="auto">
          <form onSubmit={predictHandler}>
            <Heading>Run prediction</Heading>
            {error ? (
              <MessageBox variant="error">
                There was an unexpected error.
                <br />
                Details: {error}
              </MessageBox>
            ) : isSuccessful ? (
              <MessageBox variant="success">
                Predictions generated successfully in the predictions tab. Please close this dialog box.
              </MessageBox>
            ) : (
              isLoading && <MessageBox variant="info">Generating predictions...</MessageBox>
            )}
            <TextInput placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <TextInput
              placeholder="Enter Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <Footer>
              <Button variant="primary" disabled={!(title && description) || isLoading} type="submit">
                {isLoading ? 'Processing images...' : 'Submit'}
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  setIsSuccessful(false)
                  setShowConfirmation(false)
                }}
                disabled={isLoading}
              >
                Cancel
              </Button>
            </Footer>
          </form>
        </Modal>
      )}
    </Section>
  )
}

export default ImageUpload
