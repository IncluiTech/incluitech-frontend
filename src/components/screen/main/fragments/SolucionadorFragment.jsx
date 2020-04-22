import React, { useEffect, useState } from 'react'
import { findClients } from '../../../../services/client/clientService'
import { ITActions, ITTags } from '../../../generics'
import { ITTable } from '../../../generics/ITTable/ITTable'

/* !IMPORANTE!
 * Esse código deve ser removido assim que a integração com o backend for feita
 * TODO: Remover código
 */
const createData = (id, name, lattes, email, telefone, tags) => {
  return { id, name, lattes, email, telefone, tags }
}

const mockedData = [
  createData(
    '1',
    'Aléxia de Jesus Dorneles Pereira',
    'http://lattes.cnpq.br/',
    'alexia.pereira@edu.pucrs.br',
    '(51) 98923-4000',
    ['Escola', 'Empresa', 'Palestra', 'Adulto', 'Familia', 'Infantil'],
  ),
  createData(
    '2',
    'Gabriel Ferreira Kurtz',
    'http://lattes.cnpq.br/',
    'gabriel.kurtz@email.com',
    '(51) 91234-1234',
    ['Consultor', 'Conflitos', 'Empresa', 'Adulto'],
  ),
]

export const SolucionadorFragment = () => {
  const [listSolucionador, setListSolucionador] = useState([])
  useEffect(() => {
    setListSolucionador(mockedData)
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
