import styled from 'styled-components'
import { space, colors } from '../../styling/tokens'

export const TextInput = styled('input')`
  height: ${space[5]};
  padding: 0px ${space[1]};
  border: 2px solid ${colors.gray[100]};
  width: 100%;
  box-sizing: border-box;
  margin-bottom: ${space[1]};

  &:focus {
    border-color: ${colors.gray[200]};
  }
`
