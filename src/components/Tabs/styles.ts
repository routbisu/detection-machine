import styled from 'styled-components'
import { colors, space } from '../../styling/tokens'

export const TabsContainer = styled('div')``

export const Tab = styled('button')<{ isActive: boolean }>`
  border-radius: 0px;
  border: 1px solid transparent;
  background: ${({ isActive }) => colors.purple[isActive ? 400 : 100]};
  color: ${({ isActive }) => (isActive ? colors.white : colors.black)};
  padding: ${space[1]} ${space[2]};
  cursor: pointer;
  font-size: 0.95rem;

  &:focus {
    border-color: ${colors.purple[700]};
  }

  &:hover {
    background: ${({ isActive }) => colors.purple[isActive ? 500 : 150]};
    transition: 0.3s;
  }
`
