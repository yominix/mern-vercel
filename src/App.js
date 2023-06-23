import './App.css';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState('');

  function fetchApi(url) {
    
    fetch(url).then((res) => {
      console.log(res);
      return res.json();
    }).then(res => {
      console.log(res);
      setResult(res);
    });
  }

  return (
    <div >
      <button onClick={() => { fetchApi("http://localhost:5000") }}>Frist Fetch Api</button>
      <button onClick={() => { fetchApi("http://localhost:5000/test") }}>Second Fetch Api</button>
      <div>Fetch result : {result}</div>
    </div>
  );
}

export default App;
