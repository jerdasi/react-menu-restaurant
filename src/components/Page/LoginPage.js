import React from 'react'
import FormSection from '../Login/FormSection'


const LoginPage = () => {
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "#feca1fff", margin: "0px", padding: "80px" }}>
            <div className="container">
                <div className="row content shadow" >
                    <div className="col-md-6">
                        <a href="index.html">
                            <img src="./img/logo.png" width="80" height="60" style={{ marginTop: "-30px" }} alt="logo-piccante" />
                        </a>
                        <img src="./img/login admin.png" className="img-fluid" alt="imagelogin" />
                    </div>
                    <FormSection />
                </div>
            </div>
        </div>
    )
}

export default LoginPage