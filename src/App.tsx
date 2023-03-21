import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'

import './styles/css/style.css'

function App() {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

  return (
    <div className="App">
      <div className={`background-mask ${menuIsOpen ? 'active' : null}`} onClick={()=>setMenuIsOpen(false)}></div>
      <Header handleMenuToggle={(isOpen)=>setMenuIsOpen(isOpen)} menuIsOpen={menuIsOpen}/>
    </div>
  )
}

export default App
