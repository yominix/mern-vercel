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
      <button onClick={() => { fetchApi(process.env.REACT_APP_API_URL) }}>Frist Fetch Api</button>
      <button onClick={() => { fetchApi(process.env.REACT_APP_API_URL+"test") }}>Second Fetch Api</button>
      <div>Fetch result : {result}</div>
    </div>
  );
}

export default App;
