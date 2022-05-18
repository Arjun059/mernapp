import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style/home.css"
import axios from "axios";
import products from "../data/product";
import bestProducts from "../data/bestSelling";
import {Link} from "react-router-dom";
export default function Home(props) {
    let {addProductToCart} = props;
    // use state hooks
    let [getdata, setData] = React.useState({});

    // use Effect hooks
    React.useEffect(() => {
       axios.get("/api/data")
    
       .then((response) => { 
        let obj = response.data   
        setData(response.data)
    })
       .catch((err) => { return err}) 
    }, [])

    // slider setting 
    const sliderSetting = {
        Infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        pauseOnHover: false,
    }
    const slider1Setting = {
        Infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }  
            }
        ]
    }
    const nowTrendingSetting = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        slidesToScroll:2,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 400,
        responsive: [
            {breakpoint: 576, 
            settings: {
                slidesToShow: 2,
            }
            },
            {breakpoint: 768, 
                settings: {
                    slidesToShow: 3,
                }
                }
        ]
    }
    const feacherSetting = {
            className: "center",
            centerMode: true,
            centerPadding: "200px",
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            responsive: [
                {breakpoint: 576, settings: {
                    centerPadding: "25px"
                }}
            ]
        }
    const bestSellingSetting = { 
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
        {breakpoint: 576, settings: {
            slidesToShow: 2,
            slidesPerRow: 1,
            centerPadding: "10px",
        }}
    ]
    }
    return <div>

<div style={{width: "100%"}}>
        <Slider {...sliderSetting}>
            <div className="slider-items">
                <a href="#">
                    <img src="./slider/slider1.jpg" alt="" />
                </a>
            </div>
            <div className="slider-items">
                <a href="#">
                    <img src="./slider/slider2.jpg" alt="" />
                </a>
            </div>
            <div className="slider-items">
                <a href="#">
                    <img src="./slider/slider3.jpg" alt="" />
                </a>
            </div>
            <div className="slider-items">
                <a href="#">
                    <img src="./slider/slider4.jpg" alt="" />
                </a>
            </div>
        </Slider>
</div>

<div className="w-100 container-xxl icons-slider-container mt-5">

    <Slider {...slider1Setting}>
        <div className="icon-box d-flex flex-column align-items-center">
            <a href="" className="">
                <img src="./icons/icon1.png" alt="" />
            </a>
            <p className="h5">Best Seller</p>
        </div>
        <div className="icon-box d-flex flex-column align-items-center">
            <a href="" className="">
                <img src="./icons/icon2.png" alt="" />
            </a>
            <p className="h5">International Best Seller</p>
        </div>
        <div className="icon-box d-flex flex-column align-items-center">
            <a href="" className="">
                <img src="./icons/icon3.png" alt="" />
            </a>
            <p className="h5">New Arrivals</p>
        </div>
        <div className="icon-box d-flex flex-column align-items-center">
            <a href="" className="">
                <img src="./icons/icon4.png" alt="" />
            </a>
            <p className="h5">Award Winning</p>
        </div>
        <div className="icon-box d-flex flex-column align-items-center">
            <a href="" className="">
                <img src="./icons/icon5.png" alt="" />
            </a>
            <p className="h5">Box Sets</p>
        </div>
        <div className="icon-box d-flex flex-column align-items-center">
            <a href="" className="">
                <img src="./icons/icon6.png" alt="" />
            </a>
            <p className="h5">Fiction Books</p>
        </div>
        <div className="icon-box d-flex flex-column align-items-center">
            <a href="" className="">
                <img src="./icons/icon7.png" alt="" />
            </a>
            <p className="h5">Tarot Cards</p>
        </div>
    </Slider>
</div>
<div className="container-xxl now-trending-container mt-5">
    <h2 className="display-6 text-center">Now Trending</h2>
    <hr />
    <Slider {...nowTrendingSetting}>
        {products.map((item,index) => {
        return <div className="product-container">
             <div className="img-cotainer">
                 <img src={item.imageUrl} alt="" />
             </div>
             <div className="buy-now bg-danger text-white text-center p-md-2 p-1 lead" onClick={() => addProductToCart(item)}>Shop Now</div>
        </div>
        })}
    </Slider>
</div>
<div className="container-xxl feacher-container mt-5">
    <hr />
    <Slider {...feacherSetting}>
        <div>
            <div className="f-container">
            <a href="">
                <img src="./f/f1.jpg" alt="" />
            </a>
            <p className="h3 text-center text-muted">New Offers Only For You</p>
            </div>
        </div>
        <div>
            <a href="">
                <img src="./f/f2.jpg" alt="" />
            </a>
            <p className="h3 text-center text-muted">New Offers Only For You</p>
        </div>
        <div>
            <a href="">
                <img src="./f/f3.jpg" alt="" />
            </a>
            <p className="h3 text-center text-muted">Discount Offer You Can't Miss</p>
        </div>
    </Slider>

</div>
<div className="best-selling-container container-xxl mt-5">
    <h2 className="display-5 text-center">Best Selling Books</h2>
    <hr />
    <Slider {...bestSellingSetting}>
        {bestProducts.map((item) => { 
        return <div>
            <div className="b-product-container border border-dark">
                <Link to={`/product/${item.id}`}>
                <div className="img-wraper"><img src={item.imageUrl} alt=""/></div>
                <div className="title h4 mb-3 text-danger text-center text-truncate">{item.name}</div>
                <div className="author price text-center">
                    <p className="mb-1 h5 text-truncate">{item.author}</p>
                    <p><span className="selling-price text-danger me-2 font h4 mt-0">${item.price.sale}</span>
                    <span className="regular-price"><del>${item.price.regular}</del></span>
                    </p>
                </div>
                </Link>
            </div>
        </div>
        })}
    </Slider>
</div>

</div>
}