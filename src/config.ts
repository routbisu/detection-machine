export enum Pages {
  Images = 'IMAGES',
  Predictions = 'PREDICTIONS',
}

export type MenuItem = {
  key: Pages
  label: string
}

export const menuItems: MenuItem[] = [
  {
    key: Pages.Images,
    label: 'Upload Images',
  },
  {
    key: Pages.Predictions,
    label: 'Prediction',
  },
]

export const OpenVisionServer = `http://localhost:8000/api/v1/detection`
