import { useState } from 'react'
import {mock1} from "./constants/users.js"
import Header from './Header.jsx'
import Resultados from './Resultados'
import './App.css'

function App() {
  // Variables de estado
  const [query, setQuery] = useState('')
  const [usuarios, setUsuarios] = useState(mock1.users)

  // Funciones complementarias
  const callServer = () => {
        console.log("CLICK")
        setUsuarios(mock1.users)
      }

  return (

      <div id="main">
       <Header/> 

       <h2 id="buscador">Buscador de usuarios</h2>
       <input id="query" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
       <button id="botonsearch"  onClick={callServer}>Buscar</button>

       { usuarios && <Resultados usuarios={usuarios}/> }
      </div>
  
  )
}

export default App
