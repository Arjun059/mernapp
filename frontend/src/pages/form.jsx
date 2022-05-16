import { useState } from "react";
const Form = function() {
    let [form, setForm] = useState(true)
    function handleShow(x) {
        if (x === true) setForm(true);
        if (x === false) setForm(false);
    }
    return (
        <div className="container-xl">
            <div className="titles-container ms-auto me-auto d-flex justify-content-between mb-4 p-0" style={{maxWidth: "450px"}}>
                <div className={`signup h2 text-center w-50 py-md-2 py-1 rounded ${form === true ? "border border-danger text-danger": ""}`} onClick={()=>{handleShow(true)}}>SignUp</div>
                <div className={`signin h2 text-center w-50 py-md-2 py-1 rounded ${form === false ? "border border-danger text-danger": ""}`}  onClick={()=>{handleShow(false)}}>SignIn</div>
            </div>
            { form == true ?
            <div className={"register-form-container ms-auto me-auto"} style={{maxWidth: "450px"}}>
                <form action="" method="POST">
                <label htmlFor="name" className="form-label mx-3 lead">Name</label>
                <input type="text" id="name" className="form-control mb-4" name="name" placeholder="Jone Doe"/>
                <label htmlFor="email" className="form-label lead mx-3">Email</label>
                <input type="text" id="email" className="form-control mb-4" name="email" placeholder="example@gmail.com" />    
                <label htmlFor="password" className="form-label lead mx-3">Password</label>
                <input type="Password" id="password" className="form-control mb-4" placeholder="password" name="password"/>
                <input type="password" className="form-control mb-4" name="cnfpassword" placeholder="confirm password"/>
                <button type="submit" className="btn btn-danger btn-lg">Submit</button>
                </form>
            </div> : "" }
            { form == false ? 
            <div className="login-form-container ms-auto me-auto" style={{maxWidth: "450px"}}>
                <form action="" method="POST">
                <label htmlFor="email" className="form-label lead mx-3">Email</label>
                <input type="text" id="email" className="form-control mb-4" name="email" />    
                <label htmlFor="password" className="form-label lead mx-3">Password</label>
                <input type="Password" id="password" className="form-control mb-4" placeholder="password" name="password"/>
                <button type="submit" className="btn btn-danger btn-lg">Submit</button>
                </form>
            </div> : "" }
        </div>
    )
}

export default Form;