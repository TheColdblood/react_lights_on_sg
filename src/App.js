import { useState } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';

function App() {
  const [lista, setLista] =useState([true,true,false,false,false,false,true,false,false])

  function katt(adat){
    const slista = [...lista];
    slista[adat] = !slista[adat];
    setLista([...slista]);
    
  }
  return (
    <div className="App">
      <header className="App-header"><h1>Ligths On</h1></header>
      
      <article>
        <Jatekter lista={lista} katt={katt}/>
      </article>

      <footer>Simon Gergő</footer>
    </div>
  );
}

export default App;