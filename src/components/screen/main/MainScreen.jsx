import React, { Fragment } from 'react'
import { ITPanel } from '../../generics'
import { ClienteFragment } from './fragments/ClienteFragment'
import { SolucionadorFragment } from './fragments/SolucionadorFragment'

export function MainScreen() {
  return (
    <div className="Screen">
      <ITPanel title="Clientes">
        <ClienteFragment />
      </ITPanel>
      <ITPanel title="Solucionadores">
        <SolucionadorFragment />
      </ITPanel>
    </div>
  )
}
