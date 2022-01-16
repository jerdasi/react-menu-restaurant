import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FormSection = () => {
    const onFinish = (values) => {
        console.log("values")
    }

    return (
        <div className='col-md-6'>
            <h4 className="login-text mb-3">Login</h4>
            <form onFinish={onFinish}>
                <div className="form-group">
                    <i className="bi bi-person-fill"></i>
                    <label for="email"> Username </label>
                    <input type="email" name="email" className="form-control1" />
                </div>
                <div className="form-group">
                    <i className="bi bi-key-fill"></i>
                    <label for="password"> Password </label>
                    <input type="password" name="password" className="form-control1" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" name="checkbox" className="form-check-input" id="checkbox" />
                    <label className="form-check-label" for="checkbox"> Remember me </label>
                </div>
                <button className="btn btn-block" type="submit" style={{ borderColor: "#003048fa" }}>Login</button>
            </form>
        </div>
    )
}

export default FormSection