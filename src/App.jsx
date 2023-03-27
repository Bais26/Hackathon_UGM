import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './index.css'
import Navbar from './Component/Navbar'
import Nav from './Component/Nav'

function App() {
  return(
  <div>
    <Navbar/> 
    <div>
    <h2 className='text-black font-bold justify-center text-6xl p-5 text-center'>Today News</h2>
      <Nav/>
    </div>
  </div>
  )
}

export default App
