import { Route, Routes } from "react-router-dom";
import { HomePages } from "../pages";
import {ProductList} from "../pages/index";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/Cart/CartPage";



export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
       <  Route path="/products" element={<ProductList/>}/>
       <Route path="/products/:id" element={<ProductDetails/>}/>
       <Route path="cart" element={<CartPage/>}/>
      </Routes>
    </>
  )
}

