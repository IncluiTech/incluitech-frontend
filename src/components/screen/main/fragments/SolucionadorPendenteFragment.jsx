import React, { useEffect, useState } from 'react'
import { ITActions, ITTags } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'
import { solucionadorService } from '../../../../services/client/solucionadorService'

export const SolucionadorPendenteFragment = () => {
  const [listSolucionador, setListSolucionador] = useState([])

  const findSolucionadores = async () => {
    const solucionadores = await solucionadorService.findSolucionadoresCadastroPendente()
    setListSolucionador(solucionadores)
  }

  useEffect(() => {
    findSolucionadores()
  }, [])

  const onApprove = async model => {
    await solucionadorService.aprovarCadastro(model.facebookId)
    findSolucionadores()
  }

  const createActionsComponent = row => () => <ITActions model={row} onApprove={onApprove} />

  const tableHeader = [
    '#',
    'Nome Completo',
    'Curriculo Lattes',
    'Email',
    'Telefone',
    'Instituição',
    'Função',
    'Experiências',
    'Tags',
    'Ações',
  ]
  const tableRowsConfig = [
    { prop: 'id' },
    { prop: 'nome', customStyle: { maxWidth: 50 } },
    {
      getCustomComponent: ({ lattes }) => () => (
        <a target="blank" href={lattes}>
          link
        </a>
      ),
    },
    { prop: 'email' },
    { prop: 'telefone' },
    { prop: 'instituicao' },
    { prop: 'funcao' },
    { prop: 'experiencia', customStyle: { maxWidth: 350 } },
    { getCustomComponent: row => () => <ITTags tags={row.tags} /> },
    {
      getCustomComponent: row => createActionsComponent(row),
      customStyle: { width: 175 },
    },
  ]

  return <ITTable data={listSolucionador} header={tableHeader} rowConfigs={tableRowsConfig} />
}
