import { makeStyles } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import React, { useState } from 'react'
import { ITModal } from '../../../generics/ITModal'
import { ITTable } from '../../../generics/ITTable/ITTable'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

export function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

export const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const mockedProblems = [
  {
    id: '1',
    titulo: 'oi eu sou um problema',
    emailCliente: 'aaa@aaa.com',
    nomeCliente: 'Aléxia',
    descricao: 'lorem ipsum',
  },
]

export function ProblemasFragment() {
  const [problemas, setProblemas] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState({})

  const getActions = model => (
    <EditIcon
      className="ITActions--container__icon"
      onClick={() => {
        setSelectedRow(model)
        setIsModalOpen(!isModalOpen)
      }}>
      Editar
    </EditIcon>
  )

  const tableHeader = ['#', 'Titulo', 'Email do Cliente', 'Nome do Cliente', 'Ações']
  const tableRowsConfig = [
    { prop: 'id' },
    { prop: 'titulo', customStyle: { maxWidth: 50 } },
    { prop: 'emailCliente' },
    { prop: 'nomeCliente' },
    { getCustomComponent: row => () => getActions(row), customStyle: { width: 175 } },
  ]

  return (
    <>
      <ITTable data={mockedProblems} header={tableHeader} rowConfigs={tableRowsConfig} />
      <ITModal
        body={selectedRow.descricao}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
