import React, { useEffect, useState } from 'react'
import { findClients } from '../../../../services/client/clientService'
import { ITActions, ITTags } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'

export const SolucionadorFragment = () => {
  const [listSolucionador, setListSolucionador] = useState([])
  useEffect(() => {
    const loadData = async () => {
      setListSolucionador(await findClients())
    }
    loadData()
  }, [])

  const tableHeader = ['#', 'Nome', 'Email', 'Tags', 'Ações']
  const tableRowsConfig = [
    { prop: 'id' },
    { prop: 'name' },
    { prop: 'email' },
    { getCustomComponent: row => () => <ITTags tags={row.tags} /> },
    { getCustomComponent: () => ITActions },
  ]

  return <ITTable data={listSolucionador} header={tableHeader} rowConfigs={tableRowsConfig} />
}
