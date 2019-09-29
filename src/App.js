import React from 'react';
import 'antd/dist/antd.css';
import Piano88 from './components/Piano88'
import ChordSelector from './components/ChordSelector'
import './App.css';

function App() {

  let piano88 = <Piano88/>
  console.log(piano88)



  return (
    <div className="my-app" >
      {piano88}
      <ChordSelector/>
    </div>
  );
}

export default App;
