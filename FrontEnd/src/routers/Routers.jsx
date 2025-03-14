import { Routes ,Route } from "react-router-dom"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Category from "../pages/Category"
import Favorite from "../pages/Favorite"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import ProductDetail from "../pages/ProductDetail"
const Routers = () => {
  return (
    <Routes>
       
    <Route path='/' element={<Home/>}/>
      <Route path='product/:id' element={<ProductDetail/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='category' element={<Category/>}/>
      <Route path='favorite' element={<Favorite/>}/>
    </Routes>
  )
}

export default Routers
