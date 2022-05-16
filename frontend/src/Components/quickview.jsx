import { useParams } from "react-router-dom";

const QuickView = function(props) {
    let { id } = useParams();
    console.log(id)
    
    return <div>
        <div className="view-container mt-5">
            <div className="product-container overflow-hidden">
                <div className="row justify-content-center">
                    <div className="col-4 col-md-4">
                        <div className="img-wrapper"><img src="./f/f1.jpg" className="img-fluid" alt="" /></div>
                    </div>
                    <div className="col-8 col-md-4">
                        <div className="title h2 text-danger">Product title</div>
                        <div className="author text-dark h4">Author : Jone Doi</div>
                        <div className="price mb-4"><span className="h2 text-danger me-4">$9</span><del>$10</del></div>
                        <div className="shordescription h5">hello bloa bloa hksdfkjdfsjdgfgkfdjksdfjkfhakjd kdfk kjf </div>
                        <div className="releaseDate mb-4">Publis Date : 1/1/2001</div>
                        <div className="add-to-cart"><button className="btn btn-danger">Add to cart</button></div>
                    </div>
                    <div className="col-12"></div>
                    <div className="col-12 col-md-8">
                        <hr />
                        <h3 className="mt-5">About</h3>
                        <div className="description"> product long descrition Lorem ipsum dolor sit, amet consectetur adipisicing elit. A alias dolor reprehenderit? </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>

}

export default QuickView;