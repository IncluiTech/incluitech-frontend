
import React, { useEffect, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import DoneIcon from '@material-ui/icons/Done'

import './ITActions.scss'

export function ITActions({ onApprove, model } = {}) {
  const [buttonState, setButtonState] = useState([true])
  const [buttonSelectState,setButtonSelectState]= useState([0])
  const onApprove2 = async type => {
    // await solucionadorService.aprovarCadastro(model.facebookId)
    setButtonSelectState(type)
    setButtonState(false)
    // findSolucionadores()
  }
  return (
    <div className="ITActions">
    <>
      {buttonState ?  (
          <>
          <div className="ITActions--container">
          <DoneIcon className="ITActions--container__icon"
          htmlColor="green"
          onClick={() => onApprove2(1)}>Aprovar</DoneIcon> 
          
          <span className="ITActions--container__icon--approve">aprovar</span>
          </div>
          
          <div className="ITActions--container">
          <CloseIcon className="ITActions--container__icon" htmlColor="red"
          
          htmlColor="red"
          onClick={() => onApprove2(2)}>  
          Deletar
          
          </CloseIcon>
          
          
          <span className="ITActions--container__icon--deny">negar</span>
          </div>
          </>
          ) :buttonSelectState===1 ? ("Aceito"): "Negado" }
        </>

        </div>
  )
      }


