import {
	Button,
	ButtonGroup,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { clientService } from '../../services/client/clientService'
import { ITTags } from '../generics'

const ClientView = () => {
	const [clients, updateClients] = useState([])
	const findClients = async () => {
		const clients = await clientService.findClients()
		updateClients(clients)
	}
	useEffect(() => {
		findClients()
	}, [])

	return (
		<TableContainer component={Paper} elevation={5}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell align='center'>Nome</TableCell>
						<TableCell align='center'>Email</TableCell>
						<TableCell align='center'>Tags</TableCell>
						<TableCell align='center'>Ações</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{clients.map(client => {
						return (
							<TableRow key={client.id}>
								<TableCell>{client.id}</TableCell>
								<TableCell align='center'>{client.nome}</TableCell>
								<TableCell align='center'>{client.email}</TableCell>
								<TableCell align='center'>
									<ITTags tags={client.tags} />
								</TableCell>
								<TableCell align='center'>
									<ButtonGroup variant='contained'>
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

export { ClientView }
