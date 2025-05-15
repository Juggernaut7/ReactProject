import { Route, Routes } from "react-router-dom";
import { HomePages } from "../pages";
import {ProductList} from "../pages/index";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/Cart/CartPage";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import OrderPage from "../pages/Order/OrderPage";
import DashBoardPage from "../pages/DashBoard/DashBoardPage";




export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
       <  Route path="/products" element={<ProductList/>}/>
       <Route path="/products/:id" element={<ProductDetails/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="register" element={<Register/>}/>
       <Route path="cart" element={<CartPage/>}/>
       <Route path="order-summary" element={<OrderPage/>}/>
       <Route path="dashboard" element={<DashBoardPage/>}/>
      </Routes>
    </>
  )
}

