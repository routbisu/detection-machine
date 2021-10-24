import { Coorindinates } from '../hooks/usePrediction'

export type Dimensions = {
  height: number
  width: number
}

export const getImageDimensions = (url: string, cb: (dimensions: Dimensions) => void) => {
  const img = new Image()

  img.onload = function () {
    const { height, width } = img
    cb({ height, width })
  }

  img.src = url
}

const convertFractionToPercentage = (fraction: number) => Math.round((fraction + Number.EPSILON) * 10000) / 100

export const convertCoordsToPercentage = (coords: Coorindinates, dimensions: Dimensions): Coorindinates => {
  const { width, height } = dimensions
  const { x1, x2, y1, y2 } = coords

  return {
    x1: convertFractionToPercentage(x1 / width),
    x2: convertFractionToPercentage(x2 / width),
    y1: convertFractionToPercentage(y1 / height),
    y2: convertFractionToPercentage(y2 / height),
  }
}
