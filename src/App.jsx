import { useState } from 'react';
import './App.css';
import Modal from './components/Modal.jsx';
import Counter from './components/Counter.jsx';
import NameInput from './components/NameInput.jsx';

function App() {
  return(
    <>
      <Counter numToAdd={4}/>
      <NameInput/>
    </>
  )
}

export default App;