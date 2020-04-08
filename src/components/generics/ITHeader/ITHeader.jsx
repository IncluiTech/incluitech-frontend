import React, { useState } from 'react'

import './ITHeader.scss'

import Logo from '../../../assets/logo.png'

export const ITHeader = () => {
	return (
		<div className='ITHeader'>
			<div className='ITHeader__image--container'>
				<img src={Logo} alt='IncluiTec Logo' className='ITHeader__image' />
			</div>
			<div className='ITHeader__ancoras'>
				<a>Pendências</a>
				<a>Estatísticas</a>
				<a>Sair</a>
			</div>
		</div>
	)
}
