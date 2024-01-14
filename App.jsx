import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <div id="container" className='w-full h-screen bgc' style={{backgroundColor:"#fedad3"}}>
          <Navbar/>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
