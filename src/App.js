import { useState } from 'react';
import './App.css';
import { useThrottle } from './useThrottle';

function App() {
  const [value, setValue] = useState("")
  const throttledValue = useThrottle(value)
    
  return (
    <div className="App">
      <header className="App-header">
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
        <p>
            { throttledValue }
        </p>
      </header>
    </div>
  );
}

export default App;