
import './App.css';
import React, { useEffect, useState } from 'react';

function App(){
  const [count,setCount] =useState(0);

  useEffect(() =>{
    document.title =`has hecho click ${count} veces`;
    console.log(count);
  });

  return (
    <div className='App'>
      <h1> Contador</h1>
      <p>has hecho click {count}</p>
      <button onClick={()=> setCount(count + 1)}>
        click +
      </button>
      <button onClick={()=> setCount(count - 1)}>
        click -
      </button>
    </div>
  )
}


export default App;
