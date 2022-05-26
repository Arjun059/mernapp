import React from "react";
import { Link } from "react-router-dom";
import "./style/header.css"
const Header = function(props) {
    let {cart, wishlist} = props.data;
    let cartLenght = cart.length;
    let wishlistLenght = wishlist.length;
    console.log(wishlist, "whislist is check")

    return (
    <div className="container-fluid header-container">
        <div className="row h-100">
            <div className="col-6 d-flex align-items-center col-md-3 order-1 order-md-1">
                <div className="logo-wraper">
                   <Link to="/"><img src="./seagull.png" alt="" /></Link>
                </div>
            </div>
            <div className="col-12 p-2 order-3 col-md-6 order-md-2 ">
                <div className="container h-100 w-100 p-0">
                <form action="" className="d-flex align-items-center h-100 p-0">
                    <input type="text" className="border-1 border-dark rounded-left w-100 p-2" placeholder="Find By Title,  Author,  ISBNB" />
                    <button type="submit" className="border-1 border-dark rounded-right fw-bold p-2 px-4"><i class="bi bi-search"></i></button>
                </form>
                </div>
            </div>
            <div className="col-6 order-2 col-md-3 order-md-3">
                <div className="row w-100 h-100 icon-container align-items-center g-md-4 g-3">
                    <div className="col-auto ms-auto">
                        <Link to="/register"><i class="bi bi-person-circle"></i></Link>
                    </div>
                    <div className="col-auto">
                     <a href=""><i class="bi bi-heart">{ wishlistLenght <= 0 ? "" :  <span className="icon-nombers">{wishlistLenght}</span>}</i></a>
                    </div>
                    <div className="col-auto">
                        <Link to="/cart"><i class="bi bi-bag">{ cartLenght <= 0 ? "" : <span className="icon-nombers">{cartLenght}</span>}</i></Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
    
}
export default Header;