import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core'
import { ClientScreen } from './client/ClientScreen'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export function MainScreen() {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>Clientes</ExpansionPanelSummary>
      <ClientScreen />
    </ExpansionPanel>
  )
}
