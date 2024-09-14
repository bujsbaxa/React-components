import { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'

function App() {
  
  const [links, setLinks] = useState(['Главная','Продукты','Пользователи'])
  const [word, setWord] = useState('')
  const [show, setShow] = useState(true)
  
  const changeWord = (item) => {
    setWord(item)
  }

  return (
    <>
     <div className="wrapper">
      {show && <Navbar change={changeWord} links={links} title="Это логотип"/> }
      
      <button onClick={() => setShow(!show)}>click</button>
      <h1>{word}</h1>
      <Product/>
     </div>
    </>
  )
}

export default App
