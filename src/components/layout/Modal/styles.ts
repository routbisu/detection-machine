import styled from 'styled-components'
import { colors, space } from '../../../styling/tokens'

export const ModalContainer = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 500;
  background: ${colors.whiteWithOpacity};
`

export const ModalContent = styled('div')`
  background: ${colors.white};
  border: 2px solid ${colors.gray[100]};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${space[3]} ${space[2]};
`
