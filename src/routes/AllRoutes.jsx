import { Route, Routes } from "react-router-dom";
import { HomePages } from "../pages";
import {ProductList} from "../pages/index";



export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
       <  Route path="/products" element={<ProductList/>}/>
      </Routes>
    </>
  )
}

