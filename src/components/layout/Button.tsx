import styled from 'styled-components'
import { colors, space } from '../../styling/tokens'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'default' | 'small'
}

const theme = {
  primary: colors.blue[400],
  secondary: colors.purple[400],
  danger: colors.red[500],
}

const Button = styled('button')<ButtonProps>`
  border: 1px solid transparent;
  background: ${({ variant }) => theme[variant || 'primary']};
  padding: ${({ size }) => (size === 'small' ? space[0.5] + ' ' + space[1] : space[1] + ' ' + space[2])};
  font-size: ${({ size }) => (size === 'small' ? '0.85rem' : '0.9rem')};
  color: ${colors.white};
  cursor: pointer;
  border-radius: ${space[0.25]};

  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }

  &:focus {
    border-color: ${colors.black};
  }

  &:disabled,
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default Button
