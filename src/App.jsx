import { useState } from 'react'
import Header from './views/header'
import Layaut from './components/layaut'
import Footer from './views/footer'
import './App.css'
import { Route, Routes } from 'react-router'
import Inicio from './views/inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Layaut>
          <Inicio/>
      </Layaut>
      <Footer/>
    </>
  )
}

export default App
