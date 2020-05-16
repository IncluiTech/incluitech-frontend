import React, { useEffect, useState } from 'react'
import { ITActions, ITTags } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'
import { solucionadorService} from '../../../../services/solucionador/solucionadorService'

export const SolucionadorFragment = () => {
  const [listSolucionador, updateSolucionador] = useState([])
  const findSolucionadores = async () =>{
    const solucionadores = await solucionadorService.findSolucionadores();
    updateSolucionador(solucionadores)
  }
  useEffect(() => {
    findSolucionadores()
  }, [])

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
    { getCustomComponent: () => ITActions, customStyle: { width: 175 } },
  ]

  return <ITTable data={listSolucionador} header={tableHeader} rowConfigs={tableRowsConfig} />
}
