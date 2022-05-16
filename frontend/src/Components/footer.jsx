import React from "react";

const Footer = () => {

    return <div>
        <div className="container-fluid">
            <div className="spacer" style={{marginTop: "100px"}}></div>
            <div className="row">
                <div className="col-6 col-md-3 order-2 order-md-1">
                 <ul className="list-group list-group-flush" style={{listStyle: "none"}}>
                     <li className="list-group-item h5 m-0 py-4  text-danger">Company</li>
                     <a href="" className="list-group-item"><li>About Us</li></a>
                     <a href="" className="list-group-item"><li>Contact Us</li></a>
                     <a href="" className="list-group-item"><li>Career</li></a>
                     <a href="" className="list-group-item"><li>Blog</li></a>
                 </ul>
                </div>
                <div className="col-6 col-md-3 order-3 order-md-2">
                <ul className="list-group list-group-flush" style={{listStyle: "none"}}>
                     <li className="list-group-item h5 m-0 py-4  text-danger">Policies</li>
                     <a href="" className="list-group-item"><li>Privacy Policy</li></a>
                     <a href="" className="list-group-item"><li>Term Of Use</li></a>
                     <a href="" className="list-group-item"><li>Secure Shopping</li></a>
                     <a href="" className="list-group-item"><li>Copyright Policy</li></a>
                 </ul>
                </div>
                <div className="col-6 col-md-3 order-4 order-md-3">
                <ul className="list-group list-group-flush" style={{listStyle: "none"}}>
                     <li className="list-group-item h5 m-0 py-4  text-danger">Help</li>
                     <a href="" className="list-group-item"><li>Payment</li></a>
                     <a href="" className="list-group-item"><li>Shipping</li></a>
                     <a href="" className="list-group-item"><li>Return</li></a>
                     <a href="" className="list-group-item"><li>FAQ</li></a>
                 </ul>
                </div>
                <div className="col-12 col-md-3 order-1 order-md-4">
                    <form action="" className="mt-3">
                        <label htmlFor="" className="form-label h5 text-danger">Subscribe News Later For New Release</label>
                        <div className="row g-1">
                        <div className="col-8 col-md-8">
                        <input type="text" className="form-control col-8" placeholder="Email" />
                        </div>
                        <div className="col-4 col-md-4">
                        <button type="submit" className="form-control text-success">Subscribe</button>
                        </div>
                        </div>
                    </form>
                    <div className="social-icons row">
                        <div className="col-12 mt-4 mb-3">Join Our Community</div>
                        <div className="col-auto"><a href=""><img src="./social/facebook.png" style={{height: "40px"}} alt="" /></a></div>
                        <div className="col-auto"><a href=""><img src="./social/youtube.png" style={{height: "40px"}} alt="" /></a></div>
                        <div className="col-auto"><a href=""><img src="./social/twitter.png" style={{height: "40px"}} alt="" /></a></div>
                        <div className="col-auto"><a href=""><img src="./social/instagram.png" style={{height: "40px"}} alt="" /></a></div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 bg-dark text-white p-2">Copyright © 2022 . Demosite.com. All Rights Reserved</div>
        </div>
    </div>
}
export default Footer;