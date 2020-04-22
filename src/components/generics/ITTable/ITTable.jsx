import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React from 'react'

export function ITTable({ header, data, rowConfigs }) {
  const renderHeader = () =>
    header.map(title => (
      <TableCell key={title} align="center">
        {title}
      </TableCell>
    ))

  const renderRows = (row, index, rowIndex) => {
    const rowConfig = rowConfigs[index]
    const columnKey = `row-${rowIndex}-column-${index}`
    if (rowConfig.getCustomComponent) {
      return (
        <TableCell key={columnKey} align="center">
          {rowConfig.getCustomComponent(row)()}
        </TableCell>
      )
    }
    return (
      <TableCell key={columnKey} align="center">
        {row[rowConfig.prop]}
      </TableCell>
    )
  }

  const renderTableContent = () => {
    return data.map((row, dataIndex) => {
      return (
        <TableRow key={`row-${dataIndex}`}>
          {header.map((_, index) => renderRows(row, index, dataIndex))}
        </TableRow>
      )
    })
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>{renderHeader()}</TableRow>
        </TableHead>
        <TableBody>{renderTableContent()}</TableBody>
      </Table>
    </TableContainer>
  )
}
