import React from 'react'
import { ShoppingCartOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { useNavigate } from 'react-router-dom';


const NavBar = ({ cartItems }) => {
  const navigate = useNavigate()
  return (
    <div className='px-[160px] py-4 flex justify-between items-center bg-blue-400'>
      <div className='cursor-pointer' onClick={() => { navigate('/products') }}>E-cart</div>
      <div className='flex items-center'>
        <div className='cursor-pointer'><UserOutlined /></div>

        <div className='flex items-center ml-6 mr-6 cursor-pointer' onClick={() => { navigate('/cart') }}><Badge count={cartItems.length}><ShoppingCartOutlined className='text-[24px]' /></Badge></div>

        <div className='cursor-pointer'><MenuOutlined /></div>



      </div>

    </div >
  )
}

export default NavBar