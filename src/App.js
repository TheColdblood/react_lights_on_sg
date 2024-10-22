import { useContext } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';
import { KattContext } from './context/KattContext';

function App() {
  const {lista} = useContext(KattContext)

  return (
    <div className="App">
      <header className="App-header"><h1>Ligths On</h1></header>
      
      <article>
        <Jatekter lista={lista}/>
      </article>

      <footer>Simon Gergő</footer>
    </div>
  );
}

export default App;