import React from 'react'
import { Container } from '@material-ui/core'
import { ITHeader } from './components/generics'
import { MainScreen } from './components/screen/MainScreen'

import './App.scss'

function App() {
  return (
    <div className="App">
      <ITHeader />
      <Container className="Container" maxWidth="md">
        <MainScreen />
      </Container>
    </div>
  )
}

export default App
