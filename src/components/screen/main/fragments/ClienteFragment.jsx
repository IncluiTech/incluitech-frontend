import React, { useEffect, useState } from 'react'
import { clientService } from '../../../../services/client/clientService'
import { ITActions, ITTags, ITModal } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'
import EditIcon from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider'

export const ClienteFragment = () => {
  const [clients, updateClients] = useState([])
  const [selectedRow, setSelectedRow] = useState({})
  const [isProblemModalOpen, setIsProblemModalOpen] = useState(false)

  const findClients = async () => {
    const clients = await clientService.findClients()
    updateClients(clients)
  }
  useEffect(() => {
    findClients()
  }, [])

  const getActions = model => (
    <>
      <ITActions model={model} />
      <EditIcon
        className="ITActions--container__icon"
        onClick={() => {
          setSelectedRow(model)
          setIsProblemModalOpen(!isProblemModalOpen)
        }}>
        Editar
      </EditIcon>
    </>
  )

  const tableHeader = ['#', 'Nome', 'Email', 'Instituição', 'Função', 'Tags', 'Ações']
  const tableRowsConfig = [
    { prop: 'id' },
    { prop: 'nome', customStyle: { maxWidth: 50 } },
    { prop: 'email' },
    { prop: 'instituicao' },
    { prop: 'funcao' },

    { getCustomComponent: row => () => <ITTags tags={row.tags} /> },
    { getCustomComponent: row => () => getActions(row), customStyle: { width: 175 } },
  ]

  return (
    <>
      <ITTable data={clients} header={tableHeader} rowConfigs={tableRowsConfig} />
      <ITModal
        onClose={() => setIsProblemModalOpen(false)}
        isOpen={isProblemModalOpen}
        body={<ABC list={selectedRow.problemas} />}
      />
    </>
  )
}

function ABC({ list }) {
  return (
    <div className="a">
      <h1>PROBLEMAS: </h1>
      {list.map((i, index) => (
        <>
          <p key={index}>{i}</p>
          <Divider />
        </>
      ))}
    </div>
  )
}
