import React from 'react'
import
    MenuOutlinedlined
   from '@ant-design/icons';

const NavBar = () => {
  return (
    <div className='px-6 py-4 flex justify-between items-center bg-blue-400'>
             <div>E-cart</div>
             <div><MenuOutlinedlined /></div>
    </div>
  )
}

export default NavBar