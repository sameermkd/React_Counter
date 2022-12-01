import './App.css';
import {useState} from 'react'
function App() {
  const [state, setState]=useState(0)
  return (
    <div className="App">
    <button onClick={()=>setState(state+1)}>+</button>
    <button onClick={()=>setState(state-1)}>-</button>
    <h1>Count {state}</h1>
    </div>
  );
}

export default App;
