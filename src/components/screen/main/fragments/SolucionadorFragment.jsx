import React, { useEffect, useState } from 'react'
import { ITActions, ITTags } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'
import { solucionadorService } from '../../../../services/client/solucionadorService'

export const SolucionadorFragment = () => {
  const [listSolucionador, setListSolucionador] = useState([])

  const findSolucionadores = async () => {
    const solucionadores = await solucionadorService.findSolucionadores()
    setListSolucionador(solucionadores)
  }

  useEffect(() => {
    findSolucionadores()
  }, [])

  const onApprove = model => solucionadorService.aprovarCadastro(model.facebookId)

  const createActionsComponent = row => () => <ITActions model={row} onApprove={onApprove} />

  const tableHeader = [
    '#',
    'Nome Completo',
    'Curriculo Lattes',
    'Email',
    'Telefone',
    'Tags',
    'Ações',
  ]
  const tableRowsConfig = [
    { prop: 'id' },
    { prop: 'name', customStyle: { maxWidth: 50 } },
    {
      getCustomComponent: ({ lattes }) => () => (
        <a target="blank" href={lattes}>
          link
        </a>
      ),
    },
    { prop: 'email' },
    { prop: 'telefone' },
    { getCustomComponent: row => () => <ITTags tags={row.tags} /> },
    {
      getCustomComponent: row => createActionsComponent(row),
      customStyle: { width: 175 },
    },
  ]

  return <ITTable data={listSolucionador} header={tableHeader} rowConfigs={tableRowsConfig} />
}
