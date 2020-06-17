import React from 'react'
import { ITPanel } from '../../generics'
import { ClienteFragment } from './fragments/ClienteFragment'
import { SolucionadorAprovadoFragment } from './fragments/SolucionadorAprovadoFragment'
import { SolucionadorPendenteFragment } from './fragments/SolucionadorPendenteFragment'
import './MainScreen.scss'

export function MainScreen() {
  return (
    <div className="MainScreen">
      <ITPanel title="Clientes" startExpanded>
        <ClienteFragment />
      </ITPanel>
      <ITPanel className="MainScreen__panel" title="Solucionadores Pendentes" startExpanded>
        <SolucionadorPendenteFragment />
      </ITPanel>
      <ITPanel className="MainScreen__panel" title="Solucionadores Aprovados" startExpanded>
        <SolucionadorAprovadoFragment />
      </ITPanel>
    </div>
  )
}
