import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Card, Select } from 'antd';
import { Input, Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
 
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; 
  const { Search } = Input;
  const { Meta } = Card;
  const navigate = useNavigate()
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
  const fetchProducts = (page, pageSize) => {
    const skip = (page - 1) * pageSize;
    fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products); 
        setTotal(data.total); 
      });
  };
  
 
  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchProducts(currentPage, pageSize);
  }, [currentPage]);
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
 
  };
  
  
  return (
    <div>
      <div>
      <div className='flex'>
      <Search placeholder="Search..." style={{ width: '70%' }}className='mr-4' />
        <Select
      style={{ width: "20%" }}
      placeholder="Category"
      options={categories || []}
    />
    <div> <Button type='primary' className='ml-3 w-full'>Add</Button></div>
   
    </div>
    <div className='mt-[40px] h-[65vh] grid grid-cols-4 gap-4 overflow-y-scroll'>
      {products.map((product) => {
  return (
    <Card
      hoverable
      style={{ width: 240, height: 320 }} 
      cover={
        <img
          alt="example"
          src={product.thumbnail}
          style={{
            width: '100%', 
            height: '180px', 
            objectFit: 'cover', 
          }}
        />
      }
      onClick={()=>{
        navigate(`/products/${product.id}`)
      }}
    >
      <Meta
  title={product.title}
  description={product.description.length > 20 ? product.description.substring(0, 60) + '...' : product.description}
/>

    </Card>
  );
})
}
    </div>

    </div>
    <div className='w-full flex justify-center mt-10'>
    <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={total}
        pageSize={pageSize}
      />
      </div>
    
      

    </div>
  )
}

export default Home