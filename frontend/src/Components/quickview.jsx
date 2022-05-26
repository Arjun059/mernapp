
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import bestProducts from "../data/bestSelling";
// import products from "../data/product";


const QuickView = function(props) {
    let { id } = useParams();
    let {addProductToCart, handleWishlist} = props;
    let [product, setProduct] = useState({price: {},binding: {}});

    useEffect(() => {
    setProduct(bestProducts.find((x) =>  x.id == id )) 
    console.log("quick product  ",product)
    }, [])
    
    return <div>
        <div className="view-container mt-5">
            <div className="product-container overflow-hidden">
                <div className="row justify-content-center">
                    <div className="col-4 col-md-4">
                        <div className="img-wrapper"><img src={product.imageUrl} className="img-fluid" alt="" /></div>
                    </div>
                    <div className="col-8 col-md-4">
                        <div className="title h2 text-danger">{product.name}</div>
                        <div className="author text-dark h4">Author : {product.author}</div>
                        <div className="price mb-4"><span className="h2 text-danger me-4">${product.price.sale ? product.price.sale : product.price.regular }</span><del>${product.price.regular ? product.price.regular: ""}</del></div>
                        <div className="shordescription h5">{product.shortDescription}</div>
                        <div className="cover text-danger h6">Binding: {product.binding.hardCover == true ? "Hardcover": "Papercover"}</div>
                        <div className="releaseDate mb-4">Publis Date : {product.publisDate}</div>
                        <div className="row">
                        <div className="add-to-cart col-auto"><button className="btn btn-danger" onClick={() => addProductToCart(product)}>Add to cart</button></div>
                        <div className="add-to-wishlist col-auto"><i class="bi bi-heart active-wish" style={{fontSize: "30px"}} onClick={()=>handleWishlist("Add", product)}></i></div>
                        </div>
                    </div>
                    <div className="col-12"></div>
                    <div className="col-12 col-md-8">
                        <hr />
                        <h3 className="mt-5">About</h3>
                        <div className="description"> {product.longDescription} </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>

}

export default QuickView;