import React, { useState } from 'react'
import { useCart } from '../../../context'
import CartCard from './CartCard'
import CheckOut from './CheckOut'
import {  BiRightArrowAlt } from 'react-icons/bi'


const CartList = () => {
  const [checkOut, setCheckOut] = useState(false)
  const { cartList, total } = useCart()
  return (
    <>
      <section>
        <p className='text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8'>
          My Cart ({cartList.length})
        </p>
      </section>


      <section>
        {
          cartList.map((product) => (
            <CartCard key={product.id} product={product} />
          ))
        }
      </section>


      <section className='max-w-4xl m-auto '>
        <div className='flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100'>
          <p className='flex justify-between my-2'>
          <span className='font-semibold'>
          Total Amount
          </span>
          <span>
            ${total}
          </span>

          </p>
        </div>


        <div className='text-right my-5'>
          <button
            onClick={() => setCheckOut(true)}
            className='bg-blue-700 text-white  rounded-lg font-medium dark:blue-700 dark:text-slate-100 px-7 py-2.5 mr-2 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75'
           >
            PLACE ORDER <BiRightArrowAlt/>
          </button>
        </div>

      </section>
      {checkOut && <CheckOut setCheckOut={setCheckOut} />}
    </>
  )
}

export default CartList
