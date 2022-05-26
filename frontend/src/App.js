import { useEffect, useState } from 'react';
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
import ProductPopup from "./Components/productpopup";
import {Route, Link,Routes} from "react-router-dom";
// test 
import TestForm from './pages/testform';


function App() {

  let [cart, setCart] = useState([])
  let [wishlist, setWishlist] = useState([])
  let [showPopup, setShowPopup] = useState({show:false, name:""})
  let hidePopup = () => {
    setShowPopup({show:false})
  }
  let handleWishlist = (action, item) => {
    if (action == "Add") {
      let exist = wishlist.find((x) => x.id == item.id)
      if (!exist) setWishlist([...wishlist,item]) 
    }
  }

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
       // show popup
       setShowPopup({show: true, name: item.name}) 
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
  
  useEffect(() => {
    if (cart.length != 0) window.localStorage.setItem("cart", JSON.stringify(cart))
    if (wishlist.length != 0) window.localStorage.setItem("wishlist", JSON.stringify(wishlist))
  },[cart,wishlist]);
  useEffect(() => {
    let localCart =  JSON.parse(localStorage.getItem("cart"))
    if (localCart) setCart(localCart)
    let localWishlist = JSON.parse(localStorage.getItem("wishlist"))
    if (localWishlist) setWishlist(localWishlist)
  },[])

  return (
    <div className="">
      <Header data={{cart,wishlist}}></Header>
      <SafeView></SafeView>
      <Routes>
      <Route path="/shop" element={<Shop addProductToCart={addProductToCart}></Shop>}></Route>
      <Route path="/register" element={<Form/>}></Route>
      <Route path="/cart" element={<Cart cart={cart} addProductToCart={addProductToCart} removeProductToCart={removeProductToCart} removeOneProductToCart={removeOneProductToCart}/>}></Route>
      <Route path="/product/:id" element={<QuickView addProductToCart={addProductToCart} handleWishlist={handleWishlist} />}></Route>
      <Route path='*' element={<Home addProductToCart={addProductToCart}/>}> </Route>
      <Route path='/t' element={<TestForm></TestForm>}> </Route>
      </Routes>
      <ProductPopup {...showPopup} hidePopup={hidePopup} ></ProductPopup>
      <Footer></Footer> 
    </div>
  );
}

export default App;
