import React, { useRef } from 'react'
import Button from '../layout/Button'

export type UploadButtonProps = {
  onChange: (files: FileList | null) => void
}

const UploadButton: React.FC<UploadButtonProps> = ({ children, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  return (
    <>
      <input
        type="file"
        onChange={(evt) => onChange && onChange(evt.target.files)}
        ref={fileInputRef}
        hidden
        multiple
      />
      <Button onClick={() => fileInputRef.current && fileInputRef.current.click()}>{children}</Button>
    </>
  )
}

export default UploadButton
