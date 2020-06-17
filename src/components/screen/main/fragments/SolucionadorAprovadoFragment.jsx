import React, { useEffect, useState } from 'react'
import { ITActions, ITTags } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'
import { solucionadorService } from '../../../../services/client/solucionadorService'

export const SolucionadorAprovadoFragment = () => {
  const [listSolucionador, setListSolucionador] = useState([])

  const findSolucionadores = async () => {
    const solucionadores = await solucionadorService.findSolucionadoresCadastroAprovado()
    setListSolucionador(solucionadores)
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
    'Instituição',
    'Função',
    'Experiências',
    'Tags',
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
  ]

  return <ITTable data={listSolucionador} header={tableHeader} rowConfigs={tableRowsConfig} />
}
