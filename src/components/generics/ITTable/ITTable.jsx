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

  const getCeilProps = (rowIndex, index, conf) => {
    const key = `row-${rowIndex}-column-${index}`
    const ceilStyle = { wordBreak: 'break-word' }
    const style = conf.customStyle ? { ...ceilStyle, ...conf.customStyle } : ceilStyle
    return { style, key }
  }

  const renderRows = (row, index, rowIndex) => {
    const conf = rowConfigs[index]
    const { style, key } = getCeilProps(rowIndex, index, conf)
    const content = conf.getCustomComponent ? conf.getCustomComponent(row)() : row[conf.prop]
    return renderTableCeil(style, key, content)
  }

  const renderTableCeil = (style, key, content) => (
    <TableCell style={style} key={key} align="center">
      {content}
    </TableCell>
  )

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
