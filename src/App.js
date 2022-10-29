import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {
  const [getAdvice, setGetAdvice] = useState('');

  const getFunction = async () =>{
    const response = await fetch(`https://www.boredapi.com/api/activity/ `);
    const data = await response.json();
    setGetAdvice(data.activity);
  }

  useEffect(() =>{   
    getFunction();
  }, [])


  return (
    <div className="App">
      <p className='par'>{getAdvice}</p>
      <button onClick={getFunction} className='btn'>Click for a new advice</button>
      
    </div>
  );
}

export default App;
