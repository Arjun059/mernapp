import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SafeView from './Components/safeview';
import Home from "./pages/home";
import Header from "./Components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Components/footer";
import Shop from "./pages/shop";
import Form from "./pages/form";
import QuickView from './Components/quickview';
import Cart from './pages/cart';
import {Route, Link,Routes} from "react-router-dom";


function App() {

  let [cart, setCart] = useState([])
  let  addProductToCart = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  } 
  const removeProductToCart = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== item.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const removeOneProductToCart = (item) => {
     setCart(cart.filter((x) => x.id !== item.id))
  }
  return (
    <div className="">
      <Header cart={cart}></Header>
      <SafeView></SafeView>
      <Routes>
      <Route path="/shop" element={<Shop addProductToCart={addProductToCart}></Shop>}></Route>
      <Route path="/register" element={<Form/>}></Route>
      <Route path="/cart" element={<Cart cart={cart} addProductToCart={addProductToCart} removeProductToCart={removeProductToCart} removeOneProductToCart={removeOneProductToCart}/>}></Route>
      <Route path="/product/:id" element={<QuickView addProductToCart={addProductToCart}/>}></Route>
      <Route path='*' element={<Home addProductToCart={addProductToCart}/>}> </Route>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;
