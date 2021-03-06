import styled from 'styled-components'
import { space, colors } from '../../styling/tokens'

export const TableWrapper = styled('table')`
  width: 100%;
  margin-top: ${space[2]};

  td,
  th {
    padding: ${space[1]};
  }

  thead {
    border: 1px solid ${colors.gray[100]};
    font-size: 0.9rem;
    font-weight: 600;
    text-align: left;

    th {
      background: ${colors.gray[50]};
    }
  }

  tbody {
    td {
      font-size: 0.85rem;
      border: 1px solid ${colors.gray[100]};
    }
  }

  input[type='checkbox'] {
    cursor: pointer;
  }
`

export const SmallCell = styled('td')`
  width: ${space[0.5]};
`

export const NoData = styled('div')`
  background: ${colors.yellow[100]};
  padding: ${space[2]};
  border: 1px solid ${colors.yellow[300]};
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
`
