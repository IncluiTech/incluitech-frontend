import React, { useEffect, useState } from 'react'
import { clientService } from '../../../../services/client/clientService'
import { ITTable, ITPanel, ITTags, ITModal } from '../../../generics'
import VisibilityIcon from '@material-ui/icons/Visibility';
import './ClientFragment.scss'

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

  const ModalBodyComponent = ({ client }) => {
    return (
      <div className="ClientFragment__modalProblems">
        <h1 className="ClientFragment__modalProblems__titleContent">{`Problemas: ${client.nome}`}</h1>
        {client.problemas.map((problema, index) => {
          return (<ITPanel key={index} title={problema.title}>
            <p className="ClientFragment__modalProblems__bodyContent">{problema.descricao}</p>
          </ITPanel>
          )
        })}
      </div>
    )
  }

  const getProblemas = model => (
    <VisibilityIcon
      className="ITActions--container__icon"
      onClick={() => {
        setSelectedRow(model)
        setIsProblemModalOpen(!isProblemModalOpen)
      }} />
  )

  const tableHeader = ['#', 'Nome', 'Email', 'Instituição', 'Função', 'Tags', 'Problemas']
  const tableRowsConfig = [
    { prop: 'id' },
    { prop: 'nome', customStyle: { maxWidth: 50 } },
    { prop: 'email' },
    { prop: 'instituicao' },
    { prop: 'funcao' },

    { getCustomComponent: row => () => <ITTags tags={row.tags} /> },
    { getCustomComponent: row => () => getProblemas(row) }
  ]

  return (
    <>
      <ITTable data={clients} header={tableHeader} rowConfigs={tableRowsConfig} />
      <ITModal
        onClose={() => setIsProblemModalOpen(false)}
        isOpen={isProblemModalOpen}
        body={<ModalBodyComponent client={selectedRow} />}
      />
    </>
  )
}
