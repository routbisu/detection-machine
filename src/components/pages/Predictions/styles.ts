import styled from 'styled-components'
import { colors, space } from '../../../styling/tokens'

export const ImageWrapper = styled('div')`
  width: 100%;
  img {
    width: 900px;
  }
  position: relative;
`

export const Box = styled('div')`
  position: absolute;
  z-index: 600;
  background: ${colors.hightlightBg};
  border: 1px solid ${colors.highlight};
`

export const Label = styled('div')`
  font-size: 0.7rem;
  font-weight: 600;
  position: absolute;
  top: -${space[2]};
  text-transform: capitalize;
  color: ${colors.highlight};
`
