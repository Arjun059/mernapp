
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/productpopup.css";

const ProductPopup = (props) => {
    let {show, name, hidePopup} = props;
    console.log(show)

    return <>
        <div className={`border border-danger overflowX-hidden product-popup ${show ? "show-popup" : ""}`}>
        <Link to="/cart" onClick={()=> hidePopup()}>
            <div className="row text-center py-2 position-relative">
                <div className="col-12 text-danger">
                    Product Added To Cart
                </div>

                <div className="col-12 text-dark">
                    <h5>{name}</h5>
                </div>
                <div className="col-12 text-dark">
                   go to cart
                </div>    
              </div>
            </Link>
            <div className="close position-absolute top-0 end-0 bg-danger text-white w-25 translate-middle text-center" onClick={() => hidePopup()}>Close</div>
        </div>
    </>
}
export default ProductPopup;