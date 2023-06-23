import './App.css';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState('');

  async function fetchApi(url) {
    const respon = await fetch(url);
    console.log(respon);
    const json = await respon.json();
    console.log(json);
    setResult(json)
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
