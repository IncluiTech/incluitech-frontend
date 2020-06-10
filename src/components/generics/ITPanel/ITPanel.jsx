import { ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'

import './ITPanel.scss'

export function ITPanel({ title, children, className, startExpanded }) {
  return (
    <ExpansionPanel defaultExpanded={startExpanded} className={`ITPanel ${className}`}>
      <ExpansionPanelSummary
        className="ITPanel__title"
        expandIcon={<ExpandMoreIcon htmlColor="black" />}>
        {title}
      </ExpansionPanelSummary>
      <div className="ITPanel__body">{children}</div>
    </ExpansionPanel>
  )
}
