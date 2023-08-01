
import './App.css';
import React, {useState} from "react";

function App() {

  const[min, setMin] = useState();
  const[max, setMax] = useState();
  const[random, setRandom] = useState();



  const changeMax = (e)=>{
    setMax(Number(e.target.value))
  }
  const changeMin = (e)=>{
    setMin(Number(e.target.value))
  }

  const generateRandom =()=>{
    setRandom(Math.floor(Math.random() * (max - min + 1) + min))
  }
  return (
    <div className="App">
     <h1>Random Number</h1>
     <div className='container'>
      <p>Hesaplanan sayı: {random}</p>
      <input type='number' placeholder='minimum bir sayı değeri gir' onChange={changeMin}></input>
      <input type='number' placeholder='maximum bir sayı değeri gir' onChange={changeMax}></input>
      <button onClick={generateRandom}>Rastgele bir sayı göster</button>
     </div>
    </div>
  );
}

export default App;
