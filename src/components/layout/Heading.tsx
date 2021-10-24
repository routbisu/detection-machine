import styled from 'styled-components'
import { colors, space } from '../../styling/tokens'

const Heading = styled('h1')`
  font-size: 1.2rem;
  text-transform: capitalize;
  text-align: center;
  color: ${colors.gray[500]};
  margin-bottom: ${space[3]};
`

export default Heading
