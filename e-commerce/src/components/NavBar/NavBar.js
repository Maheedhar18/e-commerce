import React from 'react'
import ShoppingCartOutlined from '@ant-design/icons';

const NavBar = () => {
  return (
    <div className='px-16 py-4 flex justify-between items-center bg-blue-400'>
             <div>E-cart</div>
             <div className='flex items-center'>
             <div>Profile</div>
             <div className='mx-4'>Menu</div>
             <div><ShoppingCartOutlined /></div>
             </div>

    </div>
  )
}

export default NavBar