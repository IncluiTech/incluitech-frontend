import React from 'react'
import { TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { ITTags } from '../generics'

const createData = (id, name, email, tags) => {
    return { id, name, email, tags }
}

const data = [
    createData("1", "Pessoa1", "pessoa@mailing", ['tag', 'tag', 'tag', 'tag', 'tag']),
    createData("2", "Pessoa2", "pessu@mailing", ['tag', 'tag', 'tag', 'tag', 'tag']),
    createData("3", "Pessoa3", "people@mailing", ['tag', 'tag', 'tag', 'tag', 'tag', 'tag']),
    createData("4", "Pessoa4", "person@mailing", ['tag', 'tag', 'tag', 'tag']),
    createData("5", "Pessoa5", "vivente@mailing", ['tag', 'tag', 'tag'])
]

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
                    {data.map((row) => {
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