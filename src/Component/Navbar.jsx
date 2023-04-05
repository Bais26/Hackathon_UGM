import React, { useState } from 'react'
import Nav from './Nav'

const Navbar = () => {

  const [navActive, setNavActive] = useState()
  const [dataActive, setDataActive] = useState()


  const kompas = [
    {
      nama: "Bola",
      category: "bola"
    },
    {
      nama: "Mgepolitan",
      category: "megapolitan"
    },
    {
      nama: "Kesehatan",
      category: "health"
    }
  ]

  const detik = [
    {
      nama: "Inet",
      category: "inet"
    },
    {
      nama: "Keuangan",
      category: "finance"
    },
    {
      nama: "Olahraga",
      category: "sport"
    },
    {
      nama: "Travel",
      category: "travel"
    },
    {
      nama: "Wolipop",
      category: "wolipop"
    },
    {
      nama: "Otomotif",
      category: "oto  "
    },
    {
      nama: "News",
      category: "news"
    },
    {
      nama: "Hot",
      category: "hot"
    }
  ]

  const handleNav = (a) => {
    if (a === 'kompas') {
      setDataActive(kompas)
    } else if(a === 'detik'){
      setDataActive(detik)
    }

  }
  return (
    <>
      <header class="text-gray-600 body-font bg-[#f1e6d2]">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">Plug In News</span>

          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">HOME</a>
            <a class="mr-5 hover:text-gray-900 cursor-pointer" onClick={() => handleNav('kompas')}>Kompas
            </a>
            <a class="mr-5 hover:text-gray-900 cursor-pointer" onClick={() => handleNav('detik')}>Detik</a>
            <a class="mr-5 hover:text-gray-900">FEATURES</a>
          </nav>
          <button class="inline-flex items-center bg-[#f1e6d2] py-1 px-3 focus:outline-none hover:bg-[#f1e6d2] rounded text-base mt-4 md:mt-0 border border-black">CONTACT US
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <div>
        <h2 className='text-black font-bold justify-center text-6xl p-5 text-center selection:bg-purple-600'>Today News</h2>
        <Nav data={dataActive} />
      </div>
    </>
  )
}

export default Navbar

