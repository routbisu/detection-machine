import { PropsWithChildren, useState, useEffect } from 'react'
import Button from '../layout/Button'
import { TableWrapper, SmallCell } from './styles'

export type TableHeaderItem = {}

export type TableProps<T> = {
  data?: T[]
  headerItems: {
    key?: keyof T
    label?: string
    // Shows a button on the last column and returns the id when clicked
    actionButtonText?: string
  }[]
  onSelect?: (selectedRowIds: string[]) => void
  onActionCall?: (selectedRowId: string) => void
}

function Table<T extends { id: string }>({
  data,
  headerItems,
  onSelect,
  onActionCall,
}: PropsWithChildren<TableProps<T>>) {
  const [selectedRows, setSelectedRows] = useState<any>({})

  const changeHandler = (id: string, val?: boolean) => {
    setSelectedRows((curr: any) => ({ ...curr, [id]: val }))
  }

  const handleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      const allSelectedRows = data?.reduce<any>((acc, obj) => {
        acc[obj.id] = true
        return acc
      }, {})

      setSelectedRows({ ...allSelectedRows })
    } else {
      setSelectedRows({})
    }
  }

  useEffect(() => {
    const selectedIds = Object.keys(selectedRows).filter((id) => selectedRows[id])
    if (onSelect) onSelect(selectedIds)
  }, [selectedRows, onSelect])

  return (
    <TableWrapper>
      <thead>
        <tr>
          {onSelect && (
            <SmallCell>
              <input type="checkbox" onChange={(evt) => handleSelectAll(evt.target.checked)} />
            </SmallCell>
          )}
          {headerItems.map(({ label }, idx) => (
            <th key={idx}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.map((row, i) => (
            <tr key={i}>
              {onSelect && (
                <td>
                  <input
                    type="checkbox"
                    onChange={(evt) => changeHandler(row.id, evt.target.checked)}
                    checked={selectedRows[row.id] || false}
                  />
                </td>
              )}
              {headerItems.map(({ key, actionButtonText }, j) =>
                actionButtonText ? (
                  <SmallCell key={j}>
                    <Button size="small" onClick={() => onActionCall && onActionCall(row.id)}>
                      {actionButtonText}
                    </Button>
                  </SmallCell>
                ) : (
                  <td key={j}>{key && row[key]}</td>
                )
              )}
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
