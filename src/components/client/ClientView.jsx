import React from 'react'
import { TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { ITTags } from '../generics'
import ClientService from '../../services/client/clientService'


const loadData = () => {
    return ClientService.findClients()
}

const ClientView = () => {
    return (
        <TableContainer component={Paper} elevation={5}>
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
                    {loadData().map((row) => {
                        return (<TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center"><ITTags tags={row.tags} /></TableCell>
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

export { ClientView };