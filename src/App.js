import './App.css';
import Button from './components/button';
import Screen from './components/screen';
import ClearButton from './components/clearbutton';
import { useState } from 'react';

function App() {
  const[input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>

      </div>
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'></div>
          <ClearButton>Clear</ClearButton>
      </div>
    </div>
  );
}

export default App;
