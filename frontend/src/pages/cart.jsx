import { useEffect, useState } from "react";
// import products from "../data/product";
const Cart = function(props) {
    let {cart, removeOneProductToCart, addProductToCart, removeProductToCart} = props;
    let [orderAmount, setOrderAmount] = useState(0)
    useEffect(() => {
    let totalAmount = cart.reduce((p,c,i,array) => p +(cart[i].price.sale * cart[i].qty), 0 )
    setOrderAmount(totalAmount)
    }, [cart])
    return <div>
        <div className="container-xxl">
            {cart.map((item) =>  
            <div className="row my-4 mx-1 py-3 mx-md-4 border border-danger">
                <div className="col-4">
                    <div className="img-wrapper"><img src={item.imageUrl} alt=""className="img-thumbnail"/></div>
                </div>
                <div className="col pt-1 pt-md-4">
                   <h4 className="text-danger">{item.name}</h4>
                   <p className="lead">Author: {item.author}</p>
                   <p className="h5">Binding: {item.binding.hardCover ? "HardCover": "PaperCover"}</p>
                </div>
                <div className="col pt-1 pt-md-4">
                    <p>Product Quantity</p>
                    <div className="qnty-container d-flex">
                        <div className="minus btn bg-danger text-white" onClick={()=>removeProductToCart(item)} >-</div>
                        <div className="qnty-nomber h4 px-4">{item.qty}</div>
                        <div className="plus btn bg-danger text-white" onClick={()=>addProductToCart(item)}>+</div>
                    </div>
                    <div className="price mt-4 mb-4 h4 text-danger">Amount: {item.qty * (item.price.sale ? item.price.sale: item.price.regulare)}</div>
                </div>
                <div className="col pt-1 pt-md-4">
                    <div className="remove-cart btn border border-danger mt-3" onClick={()=>removeOneProductToCart(item)}>Remove</div>
                </div>
            </div> 
            )}
            <div className="container-xxl">
                <div className="checkout-container mx-3 px-3" style={{maxWidth: "400px"}}>
                    <div className="totol-amount h5 d-flex ">Totoal Amount:<span className="text-danger h5 ms-auto">{orderAmount}</span> </div>
                    <div className="discount h5 d-flex">Discount : <span className="ms-auto">--</span></div>
                    <div className="h5 d-flex">Tax : <span className="ms-auto">--</span></div>
                    <div className="h5 d-flex ">Total Paybal Amount <span className="text-danger ms-auto h5">{orderAmount}</span> </div>
                </div>
            </div>
        </div>
    </div>
}

export default Cart;