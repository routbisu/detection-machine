import styled from 'styled-components'
import { colors, space } from '../../styling/tokens'

const MessageBox = styled('div')<{ variant: 'success' | 'info' | 'error' }>`
  background: ${({ variant }) =>
    variant === 'success' ? colors.green[100] : variant === 'info' ? colors.yellow[100] : colors.orange[100]};
  border: 1px solid;
  border-color: ${({ variant }) =>
    variant === 'success' ? colors.green[300] : variant === 'info' ? colors.yellow[400] : colors.orange[200]};
  font-size: 0.8rem;
  padding: ${space[1]};
  margin-bottom: ${space[1]};
  line-height: 1.1rem;
`

export default MessageBox
