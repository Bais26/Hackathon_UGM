import React from 'react'

const Nav = ({ data }) => {
  return (
    <div>
      <nav className='bg-[#f1e6d2] p-5'>
        <div className='container mx-auto'>
          <ul className='flex flex-wrap justify-around font-medium text-gray-600 '>
            {data && data.map((name, index) => {
              return (
                <li key={'a'+index}><a href='#'>{name.nama}</a></li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
