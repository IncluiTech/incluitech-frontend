import React from 'react'
import { ITPanel } from '../generics'
import { ClientScreen } from './client/ClientScreen'

export function MainScreen() {
  return (
    <ITPanel title="Clientes">
      <ClientScreen />
    </ITPanel>
  )
}
