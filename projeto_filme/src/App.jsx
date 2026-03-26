import { useState } from 'react'
import Home from './pages/Home'
import Personagens from './pages/Personagens'
import Curiosidades from './pages/Curiosidades'

function p() {

  const [pagina,setPagina] = useState('Home')
  
  const renderizarPagina = ()=>{
    if(pagina === 'Home') return<Home/>
    if(pagina === 'Persnagens') return <Personagens/>
    if(pagina === 'Curiosidades') return <Curiosidades/>
  }

  return (
    <div className="container">
      <h1> Batman</h1>
      <nav>
        <button onClick={()=>setPagina('Home')}>Home</button>
        <button onClick={()=>setPagina('Personagens')}>Personagens</button>
        <button onClick={()=>setPagina('Curiosidades')}>Curiosidades</button>
      </nav>
      <div className='conteudo'>
        {renderizarPagina()}
      </div>
    </div>
  )
}

export default App
