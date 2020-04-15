import React from 'react';
import { Container } from '@material-ui/core'
import { ITHeader } from './components/generics';
import { ClientView } from './components/cliente/ClientView'

import "./App.scss"

function App() {
  return (
    <div className="App">
      <ITHeader />
      <Container className="Container" maxWidth="md">
        <ClientView />
      </Container>
    </div>
  );
}

export default App;
