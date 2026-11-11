import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'

function App() {
  // Variables de estado
  const [query, setQuery] = useState('')

  // Funciones complementarias
  const callServer = () => {
        console.log("CLICK")
      }

  return (

      <div>
       <Header/> 
       <h2 id="buscador">Buscador de usuarios</h2>
       <input id="query" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
       <button id="botonsearch"  onClick={callServer()}>Buscar</button>
      </div>
  
  )
}

export default App
