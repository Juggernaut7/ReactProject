import React from 'react'
import { Link } from 'react-router-dom'

const DashBoardCard = () => {
  return (
    <div className='max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700'>
      <div className='flex justify-between items-center text-sm m-2 font-bold dark:text-slate-200'>
        <span className='font-bold'>Order Id: 2</span>
        <span className='font-bold'>Total Price: $2000</span>
      </div>
      <div className='flex justify-between items-center text-sm m-2 font-bold dark:text-slate-200'>
        <Link to = '/products/10002'>
        <img className='w-32 rounded' alt = 'Django Framework for beginners' src = 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40' />
        </Link>
        <div>
                    <Link to="/products.10002">
                        <p className="text-lg ml-2 dark:text-slate-200">Django Framework for Beginners</p>
                    </Link>  

                    <div className="text-lg m-2 dark:text-slate-200">
                            <span>$29</span>
                        
                    </div>  
                </div>
       
      </div>
      
    </div>
  )
}

export default DashBoardCard
