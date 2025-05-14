import React from 'react'
import { BiCart, BiCheckCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const OrderSucess = () => {
  return (
    <section className='text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700'>
        <div className='my-5'>
            <p className='text-green-600 text-7xl mb-5'>
                <BiCheckCircle/>
                </p>
            <p>
                Thank you Juggernaut for your order! 
            </p>
            <p>
            <span className='text-red-500'>Order ID: </span>
            <span className='text-blue-500'>1234567890</span>

            </p>
        </div>
        <div className='my-5'>
            <p>
                Your order is confirmed
            </p>
            <p>
                Please check your email (juggernaut@gmail.com) for the order details and tracking information.
            </p>
            <p className='my-5'>
                Payment ID: 123456789
            </p>
        </div>
        <Link 
        to='/products'
        className='text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mb-2 dark:hover:bg-blue-700 dark:bg-blue-600 focus:outline-none inline-flex items-center justify-center w-full text-center dark:text-white  dark:focus:ring-blue-800'
        >
            Continue Shopping!
            <BiCart/>
        </Link>

    </section>
  )
}

export default OrderSucess
