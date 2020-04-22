import React, { useEffect, useState } from 'react'
import { findClients } from '../../../../services/client/clientService'
import { ITActions, ITTags } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'

export const ClienteFragment = () => {
  const [listClients, setListClients] = useState([])
  useEffect(() => {
    const loadData = async () => {
      setListClients(await findClients())
    }
    loadData()
  }, [])

  const tableHeader = ['#', 'Nome', 'Email', 'Tags', 'Ações']
  const tableRowsConfig = [
    { prop: 'id' },
    { prop: 'name', customStyle: { maxWidth: 50 } },
    { prop: 'email' },
    { getCustomComponent: row => () => <ITTags tags={row.tags} /> },
    { getCustomComponent: () => ITActions, customStyle: { width: 175 } },
  ]

  return <ITTable data={listClients} header={tableHeader} rowConfigs={tableRowsConfig} />
}
