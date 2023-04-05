import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './index.css'
import Navbar from './Component/Navbar'
import Nav from './Component/Nav'
import Article from './Component/Article'
import ArticlesNew from './Component/ArticlesNew'

function App() {
  return (
    <div>
      <Navbar />
    <div>
      {/* <Article /> */}
      <ArticlesNew/>
    </div>
    </div>

  )
}

export default App
