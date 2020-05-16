import React, { useEffect, useState } from 'react'
import { clientService } from '../../../../services/client/clientService'
import { ITActions, ITTags } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'

const createData = (id, name, email, tags) => {
  return { id, name, email, tags }
}


const mockedData = [
  createData("1", "Thomas", "thomas@mailing", ['Escola', 'Autismo']),
  createData("2", "Rafael", "Rafael@mailing", ['Faculdade', 'Autismo']),
  createData("3", "Carlos", "Carlos@mailing", ['ONG', 'Psicologia']),
  createData("4", "Alexia", "Alexia@mailing", ['Trabalho', 'Foco', 'TDH']),
  createData("5", "Joao Pedro", "joao@mailing", ['Convivencia', 'Colegas'])
]


export const ClienteFragment = () => {
  const [clients, updateClients] = useState([])
  const findClients = async () => {
    const clients = await clientService.findClients();
    updateClients(clients)
  }
  useEffect(() => {
    findClients()
  }, [])

  const tableHeader = ['#', 'Nome', 'Email', 'Tags', 'Ações']
  const tableRowsConfig = [
    { prop: 'id' },
    { prop: 'nome', customStyle: { maxWidth: 50 } },
    { prop: 'email' },
    { getCustomComponent: row => () => <ITTags tags={row.tags} /> },
    { getCustomComponent: () => ITActions, customStyle: { width: 175 } },
  ]

  return <ITTable data={clients} header={tableHeader} rowConfigs={tableRowsConfig} />
}
