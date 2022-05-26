import { useEffect, useState, useRef } from "react";
import axios from "axios";

const Form = function() {
    let firstName = useRef()
    let lastName = useRef()
    let email = useRef()
    let password = useRef()
    let cnfpassword = useRef()
    let avtar = useRef()

    let [errMsg, setErrMsg] = useState([])
    let [msg, setMsg] = useState("")
  
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        setErrMsg([]);
        setMsg("")
        let formData = new FormData();
        formData.append("firstname", firstName.current.value)
        formData.append("lastname", lastName.current.value)
        formData.append("email", email.current.value)
        formData.append("password", password.current.value)
        formData.append("cnfpassword", cnfpassword.current.value)
        formData.append("avtar", avtar.current.files[0])

        axios.post("/api/users/register",formData)
        .then((res) => {setMsg(res.data); console.log(res.data)})
        .catch((err) => setErrMsg(err.response.data))

    }
    
    
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
                <form action="" method="POST" onSubmit={handleRegisterSubmit} encType="multipart/form-data">
                <label htmlFor="name" className="form-label mx-3 lead">First Name</label>
                <input type="text" id="name" className="form-control mb-4" name="fistName" ref={firstName} placeholder="Jon"/>
                <label htmlFor="name" className="form-label mx-3 lead">Last Name</label>
                <input type="text" id="name" className="form-control mb-4" name="lastName" ref={lastName} placeholder="Doe"/>
                <label htmlFor="email" className="form-label lead mx-3">Email</label>
                <input type="text" id="email" className="form-control mb-4" name="email" ref={email} placeholder="example@gmail.com" />    
                <label htmlFor="password" className="form-label lead mx-3">Password</label>
                <input type="Password" id="password" className="form-control mb-4" ref={password} placeholder="password" name="password"/>
                <input type="password" id="cnfpassword" className="form-control mb-4" name="cnfpassword" ref={cnfpassword} placeholder="confirm password"/>
                <button type="submit" className="btn btn-danger btn-lg">Submit</button>
                <input type="file" name="avtar" id="avtar" ref={avtar} />
                </form>
                { !msg ? "" :
                <div className="text-center h4 border rounded border-success text-success m-4 p-2 me-auto ms-auto" style={{maxWidth: "450px"}} >{msg}</div> 
                } 
                {errMsg.length == 0 ? "" : errMsg.map((errmsg) => 
                <div className="error-msg text-danger border border-dark lead rounded text-center m-2 my-2 me-auto ms-auto" style={{maxWidth: "450px"}}>
                {"**  "+ errmsg +"  **"}
            </div>
            )}
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