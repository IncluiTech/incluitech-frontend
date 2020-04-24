import React from 'react'
import Logo from '../../../assets/logo.png'
import './ITHeader.scss'
import { Toolbar } from '@material-ui/core'

export const ITHeader = () => {
  return (
    <Toolbar className="ITHeader">
      <div className="ITHeader__image--container">
        <img src={Logo} alt="IncluiTec Logo" className="ITHeader__image" />
      </div>
      <div className="ITHeader__ancoras">
        <a>Pendências</a>
        <a>Estatísticas</a>
        <a>Sair</a>
      </div>
    </Toolbar>
  )
}
