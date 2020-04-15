import React from 'react';
import { ITHeader, ITTags } from './components/generics';

import "./App.scss"

function App() {
  return (
    <div className="App">
      <ITHeader />
      <ITTags tags={["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7"]}/>
    </div>
  );
}

export default App;
