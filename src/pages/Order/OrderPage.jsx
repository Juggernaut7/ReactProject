import React from 'react'
import { useTitle } from '../../hooks/useTitle'
import { useLocation } from 'react-router-dom'
import OrderSucess from './components/OrderSucess'
import OrderFail from './components/OrderFail'

const OrderPage = () => {
    useTitle('Order Summary')
    const {state} = useLocation()
  return (
    <main>
        {state?.status ? <OrderSucess /> : <OrderFail />}

    </main>
  )
}

export default OrderPage
