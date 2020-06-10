import React from 'react'
import { ITPanel } from '../../generics'
import { ClienteFragment } from './fragments/ClienteFragment'
import { SolucionadorFragment } from './fragments/SolucionadorFragment'
import './MainScreen.scss'
import { ProblemasFragment } from './fragments/ProblemasFragment'

export function MainScreen() {
  return (
    <div className="MainScreen">
      <ITPanel title="Clientes">
        <ClienteFragment />
      </ITPanel>
      <ITPanel className="MainScreen__panel" title="Solucionadores">
        <SolucionadorFragment />
      </ITPanel>
      <ITPanel title="Problemas">
        <ProblemasFragment />
      </ITPanel>
    </div>
  )
}
