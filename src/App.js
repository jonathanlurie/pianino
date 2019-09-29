import React from 'react';
import './App.css';
import Piano88 from './components/Piano88'

function App() {

  let piano88 = <Piano88/>
  console.log(piano88)

  return (
    <div className="App">
      {piano88}
    </div>
  );
}

export default App;
