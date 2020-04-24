import React from 'react'
import './App.scss'
import { ITHeader } from './components/generics'
import { MainScreen } from './components/screen/main/MainScreen'

function App() {
  return (
    <div className="App">
      <ITHeader />
      <MainScreen />
    </div>
  )
}

export default App
