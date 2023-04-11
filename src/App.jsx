import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './index.css'
import Navbar from './Component/Navbar'
import Nav from './Component/Nav'
import Articles from './Component/Article'
import Search from './Featur/Search'
import Article from './Component/Article'
import ArticlesNew from './Component/ArticlesNew'

function App() {
  return (
    <div>
      <Navbar />
      <div>
        {/* <Articles/> */}
      </div>
    <div>
      <ArticlesNew/>
    </div>
    </div>

  )
}

export default App
