import { ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'

import './ITPanel.scss'

export function ITPanel({ title, children }) {
  return (
    <ExpansionPanel defaultExpanded={true} className="ITPanel">
      <ExpansionPanelSummary
        className="ITPanel__title"
        expandIcon={<ExpandMoreIcon htmlColor="black" />}>
        {title}
      </ExpansionPanelSummary>
      <div className="ITPanel__body">{children}</div>
    </ExpansionPanel>
  )
}
