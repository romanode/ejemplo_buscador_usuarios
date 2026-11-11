import { useState } from 'react'
import CONFIG from "./config/config";
import {mock1} from "./constants/users.js"
import Header from './Header.jsx'
import Resultados from './Resultados'
import './App.css'

function App() {
  // Variables de estado
  const [query, setQuery] = useState('');
  const [resultado, setResultado] = useState('');

  // Funciones complementarias
  const callServer = async () => {
        console.log("CLICK");
        if(CONFIG.use_server){
          const res = await fetch(CONFIG.server_url);
          const data = await res.json();
          console.log(data);
          setResultado(data.users);
        }else{
        setResultado(mock1.users);
        }
      }

  return (

      <div id="main">
       <Header/> 

       <h2 id="buscador">Buscador de usuarios</h2>
       <input id="query" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
       <button id="botonsearch"  onClick={callServer}>Buscar</button>

       { resultado && <Resultados resultado={resultado}/> }
      </div>
  
  )
}

export default App
