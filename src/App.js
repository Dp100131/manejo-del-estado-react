import React from 'react';
import './App.css';
import { UseState } from './UseState'; 
import { ClassState } from './ClassState';

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <hr/>
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
