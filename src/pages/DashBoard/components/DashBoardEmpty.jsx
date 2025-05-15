import React from 'react'
import { BiCart } from 'react-icons/bi'

const DashBoardEmpty = () => {
  return (
    <section className='flex flex-col justify-center items-center h-screen my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded'>
        <div className='my-5'>
            <p className='text-green-600 text-7xl bm-5'>
                <BiCart/>
            </p>
            <h1 className='text-3xl font-bold'> Oops! Your Cart is Empty</h1>
            <p className='text-lg'>Add eBooks to your cart from our collection.</p>

        </div>
        <a href="/"
         className='flex justify-center items-center bg-blue-600 text-white py-2 px-7 rounded font-bold transition-all hover:bg-blue-700 gap-2 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600'>
            <BiCart/>
            <span>Continue Shopping</span>

         </a>
    </section>
  )
}

export default DashBoardEmpty
