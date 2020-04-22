import React, { useState, useEffect } from 'react'
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'
import { Button, ButtonGroup } from '@material-ui/core'
import { ITTags } from '../../generics'
import { findClients } from '../../../services/client/clientService'

const ClientScreen = () => {
  const [listClients, setListClients] = useState([])
  useEffect(() => {
    const loadData = async () => {
      setListClients(await findClients())
    }
    loadData()
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Tags</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listClients.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  <ITTags tags={row.tags} />
                </TableCell>
                <TableCell align="center">
                  <ButtonGroup variant="contained">
                    <Button>Aprovar</Button>
                    <Button>Deletar</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { ClientScreen }
