import React from 'react'
import '../CssFiles/Form.css'

function Form() {
  return (
    <div className="form-main">
        <h1>My Account</h1>
        <div className="form-in">
            <div className="form-login">
                <h3>Log In</h3>
                <div className="form-in-login">
                    <label className="form-label">UserName or Email Address</label>
                    <input className="form-input" />
                    <label className="form-label">Password</label>
                    <input className="form-input" type="password"/>
                    <button className="form-btn">Log In</button>
                    <div style={{display:"flex", flexDirection:"row", alignItems: "center",size:"50px",marginTop:"10px"}}>
                        <input type="checkbox" className="form-check"></input>
                        <p>Remember Me</p>
                        
                    </div>
                    <p style={{color:"blueviolet"}}>Forget Password ?</p>
                </div>
            </div>
            <div className="form-register">
                <h3>Register</h3>
                <label className="form-label">Email ID</label>
                <input className="form-input"></input>
                <p>* A password will be sent to your Email</p>
                <button className="form-btn">Register</button>
            </div>
        </div>
    </div>
  )
}

export default Form