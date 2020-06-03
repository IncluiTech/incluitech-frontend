import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import DoneIcon from '@material-ui/icons/Done'

import './ITActions.scss'

export function ITActions({ onApprove, model } = {}) {
  return (
    <div className="ITActions">
      <div className="ITActions--container">
        <DoneIcon
          className="ITActions--container__icon"
          htmlColor="green"
          onClick={() => onApprove(model)}>
          Aprovar
        </DoneIcon>
        <span className="ITActions--container__icon--approve">aprovar</span>
      </div>
      <div className="ITActions--container">
        <CloseIcon className="ITActions--container__icon" htmlColor="red">
          Deletar
        </CloseIcon>
        <span className="ITActions--container__icon--deny">negar</span>
      </div>
    </div>
  )
}
