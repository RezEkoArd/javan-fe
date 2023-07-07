import React, { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'

import { totalTemp } from '../Redux/Action/Action'

function ResultContainer() {
    const dispatch = useDispatch();
    const totalTempValue = useSelector((state) => state.cart.totalTemp);

    useEffect(() => {
        dispatch(totalTemp());
    },[dispatch]);
    
    
    return (
    <div className='flex flex-col justify-between p-5 shadow-2xl mt-10 lg:w-2/6 h-[300px] rounded-lg '>
        <div className='border-b-[3px] p-4 flex flex-col'>
              <h1 className='font-bold text-lg mb-3'>The total amount of</h1>
            <div>
                <div className='flex item justify-between'>
                    <p>Temporary amount</p>
                    <p> ${totalTempValue} </p>
                </div>
                <div className='flex item justify-between'>
                    <p>Shopping</p>
                    <p> Gratis </p>
                </div>
            </div>
        </div>
        <div className='flex justify-between font-bold'>
            <h2>The total amount of (including VAT) </h2>
            <p> ${totalTempValue - (totalTempValue * 10/100)} </p>
        </div>
        <button className='rounded-md bg-sky-500/90 p-3 w-5/5 text-white'>
            Go To Checkout
        </button>
    </div>
  )
}

export default ResultContainer