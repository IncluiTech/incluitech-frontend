import React, { useEffect, useState } from 'react'
import { clientService } from '../../../../services/client/clientService'
import { ITActions, ITTags } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'

export const ClienteFragment = () => {
  const [clients, updateClients] = useState([])
  const findClients = async () => {
    const clients = await clientService.findClients()
    updateClients(clients)
  }
  useEffect(() => {
    findClients()
  }, [])

  const onApprove = model => {
    console.log('Approved!', model)
  }

  const tableHeader = ['#', 'Nome', 'Email', 'Instituição', 'Função', 'Tags', 'Ações']
  const tableRowsConfig = [
    { prop: 'id' },
    { prop: 'nome', customStyle: { maxWidth: 50 } },
    { prop: 'email' },
    { prop: 'instituicao' },
    { prop: 'funcao' },

    { getCustomComponent: row => () => <ITTags tags={row.tags} /> },
    {
      getCustomComponent: row => () => <ITActions model={row} onApprove={onApprove} />,
      customStyle: { width: 175 },
    },
  ]

  return <ITTable data={clients} header={tableHeader} rowConfigs={tableRowsConfig} />
}
