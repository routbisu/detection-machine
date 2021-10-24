import styled from 'styled-components'
import { colors, space } from '../../styling/tokens'

export const TabsContainer = styled('div')`
  display: flex;
  align-items: center;
`

export const Tab = styled('button')<{ isActive: boolean }>`
  border-radius: 0px;
  border: 1px solid transparent;
  background: ${({ isActive }) => colors.purple[isActive ? 400 : 100]};
  color: ${({ isActive }) => (isActive ? colors.white : colors.black)};
  padding: 0px ${space[2]};
  cursor: pointer;
  font-size: 0.95rem;
  height: ${space[6]};

  &:focus {
    border-color: ${colors.purple[700]};
  }

  &:hover {
    background: ${({ isActive }) => colors.purple[isActive ? 500 : 150]};
    transition: 0.3s;
  }
`

export const Tag = styled('span')<{ isActive: boolean }>`
  display: inline-block;
  margin-left: ${space[1]};
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ isActive }) => colors.purple[isActive ? 300 : 400]};
  padding: ${space[0.5]} ${space[1]};
  color: ${colors.white};
  border-radius: ${space[0.25]};
`
