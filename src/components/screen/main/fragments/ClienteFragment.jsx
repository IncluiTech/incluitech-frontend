import React, { useEffect, useState } from 'react'
import { clientService } from '../../../../services/client/clientService'
import { ITActions, ITTags } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'

const createData = (id, name, email, tags) => {
  return { id, name, email, tags }
}


const mockedData = [
  createData("1", "Pessoa1", "pessoa@mailing", ['tag', 'tag', 'tag', 'tag', 'tag']),
  createData("2", "Pessoa2", "pessu@mailing", ['tag', 'tag', 'tag', 'tag', 'tag']),
  createData("3", "Pessoa3", "people@mailing", ['tag', 'tag', 'tag', 'tag', 'tag', 'tag']),
  createData("4", "Pessoa4", "person@mailing", ['tag', 'tag', 'tag', 'tag']),
  createData("5", "Pessoa5", "vivente@mailing", ['tag', 'tag', 'tag'])
]


export const ClienteFragment = () => {
  const [clients, updateClients] = useState([])
  const findClients = async () => {
    const clients = await mockedData;
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
