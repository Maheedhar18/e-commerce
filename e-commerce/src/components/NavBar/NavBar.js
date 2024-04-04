import React from 'react'
import {ShoppingCartOutlined} from '@ant-design/icons';


const NavBar = () => {
  return (
    <div className='px-[160px] py-4 flex justify-between items-center bg-blue-400'>
             <div>E-cart</div>
             <div className='flex items-center'>
             <div>Profile</div>
             <div className='ml-8 mr-6'>Menu</div>
             {/* <div>Cart</div> */}
             <div className='flex items-center'><ShoppingCartOutlined className='text-[24px]'/></div>

             </div>

    </div>
  )
}

export default NavBar