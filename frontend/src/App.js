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
import {Route, Link,Routes} from "react-router-dom"

function App() {
  return (
    <div className="">
      <Header></Header>
      <SafeView></SafeView>
      <Routes>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/register" element={<Form/>}></Route>
      <Route path="/product/:id" element={<QuickView/>}></Route>
      <Route path='*' element={<Home/>}> </Route>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;
