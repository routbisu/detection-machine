import { PropsWithChildren } from 'react'
import { TableWrapper } from './styles'

export type TableHeaderItem = {}

export type TableProps<T> = {
  data?: T[]
  headerItems: {
    key: keyof T
    label: string
  }[]
}

function Table<T>({ data, headerItems }: PropsWithChildren<TableProps<T>>) {
  return (
    <TableWrapper>
      <thead>
        <tr>
          {headerItems.map(({ label }, idx) => (
            <th key={idx}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.map((row, i) => (
            <tr key={i}>
              {headerItems.map(({ key }, j) => (
                <td key={j}>{row[key]}</td>
              ))}
            </tr>
          ))
        ) : (
          <p>No Record found</p>
        )}
      </tbody>
    </TableWrapper>
  )
}

export default Table
