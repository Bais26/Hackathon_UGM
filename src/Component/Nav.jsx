import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className='bg-[#f1e6d2] p-5'>
        <div className='container mx-auto'>
            <ul className='flex justify-around font-medium text-gray-600 '>
                <li><a href='#'>Populer</a></li>
                <li><a href='#'> News </a></li>
                <li><a href='#'> Politik </a></li>
                <li><a href='#'> Otomotif </a></li>
                <li><a href='#'> Umkm </a></li>
                <li><a href='#'> Properti </a></li>
            </ul>
        </div>
      </nav>  
    </div>
  )
}

export default Nav
