import React, { useState } from 'react'
import { useEffect } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
const Home = () => {
  const [categories, setCategories] = useState([]);
  const { Search } = Input;
  const fetchCategories = () => {
    fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(res=> {
  let tempCategories = [];
  res.map((item) =>{
    let tempOption = {
      value:item,
      label:item
    }
    tempCategories.push(tempOption);
  })
  setCategories(tempCategories)
})

  }
  useEffect(() => {
    fetchCategories()
  }, [])
  
  
  return (
    <div>
      <div className='flex'>
      <Search placeholder="Search..." style={{ width: '80%' }}className='mr-4' />
        <Select
      style={{ width: "20%" }}
      placeholder="Category"
      options={categories || []}
    /></div>
      

    </div>
  )
}

export default Home