import "./style/shop.css"
import bestProducts from "../data/bestSelling";
const products = bestProducts;
const Shop = function() {
    
    return (
        <div className="conatainer-xxl shop-container">
            <div className="row">
                {products.map((product) => { 
                return (
                <div className="col-6 col-md-4 col-lg-3 product-container p-0">
                    <div className="product-wrapper m-2 m-md-3 ">
                   <div className="img-wraper">
                       <img src={product.imageUrl} alt="" className="product-img"/>
                   </div>
                   <div className="title h4 px-2 text-danger text-truncate">{product.name}</div>
                   <div className="content px-2">
                       <div className="author h5 text-truncate"> <span className="text-muted lead">Author :</span>{product.author}</div>
                       <div className="price">
                           <strong className="h4 text-danger me-3">${product.price.sale}</strong><del>${product.price.regular}</del>
                       </div>
                       <div className="buy "><button className="btn btn-danger my-3">buy now</button></div>
                       
                   </div>
                   </div>
                </div>)
                })}
            </div>

        </div>
    )
}
export default Shop;