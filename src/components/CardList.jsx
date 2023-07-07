import React from 'react'
import { HeartIcon, TrashIcon } from '@heroicons/react/24/solid' 

import { useDispatch, useSelector } from 'react-redux'
import { countProductPlus, countProductMinus, deleteProduct } from '../Redux/Action/Action'

const CardList = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleCountPlus = (id) => {
    dispatch(countProductPlus(id));
  }

  const handleCountMinus = (id) => {
    dispatch(countProductMinus(id));
  }

  const handleDeleteProduct = (id) => {
      dispatch(deleteProduct(id))
  }

  return (
    <div className='p-5 shadow-2xl lg:w-4/5 lg:h-[700px] rounded-lg'>
      <h1 className='font-bold text-lg'>Cart ({products.length} items)</h1>
        {products.map((item) => (
          <div className='w-5/5 shadow-b-lg mt-3 border-b-[2px] rounded-md p-3' key={item.id}>
            <div className='wrapper p-3 flex justify-between'>
              <div className=' lg:flex gap-4'>
                <div>
                  <img alt='product' src={item.img} width={150} height={150} className='rounded-md shadow-lg'/>
                </div>
                <div className='flex flex-col gap-5 mt-4'> 
                  <div>
                    <h2 className='font-medium text-xl'>{item.nameProduct}</h2>
                    <p className='text-sm'> {item.color} </p>
                  </div>
                  <div>
                    <h2 className='font-normal text-sm'>{item.id}</h2>
                    <p className='font-normal text-sm'> Size: {item.size} </p>
                  </div>
                  <div className='flex flex-col'>
                    <button 
                    className='flex gap-2 items-center'
                    onClick={() => handleDeleteProduct(item.id)}
                    >
                      <TrashIcon className='w-4 h-4'/>
                      <span> Remove Item </span>
                    </button>
                    <button className='flex gap-2 items-center'>
                      <HeartIcon className='w-4 h-4'/>
                      <span> Move to wish lish </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <div className='flex gap-2'>
                  <button 
                  className='rounded-l-lg shadow-lg bg-slate-500 px-2'
                  onClick={() => handleCountMinus(item.id)}
                  >-</button>
                  <p className=' shadow-lg border-1 px-2'>{item.count}</p>
                  <button 
                  className='rounded-r-lg shadow-lg bg-slate-500 px-2'
                  onClick={() => handleCountPlus(item.id)}
                  >+</button>
                </div>
                <div className='text-right font-bold'>
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default CardList