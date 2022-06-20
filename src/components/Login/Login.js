import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div style={{background: "white"}}>
            <div className="container pt-5">
                <form className='mx-auto w-50 bg-white px-5 pt-5 pb-4 border'>
                <h3 className='pb-4 text-start'>Login</h3>
                    <div className="mb-5">
                        <input type="email" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 text-start">
                        <input type="checkbox" className="me-2" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-warning login-btn mb-3">Submit</button>
                    <p>Don't have an account? <Link to="/register" className='text-warning'>Create an account</Link></p>
                </form><br />
                <p>------------------------------------------ Or ------------------------------------------</p>
                <button type="submit" className="btn btn-primary mb-3 me-2 rounded-pill">Continue with Facebook</button>
                <button type="submit" className="btn btn-secondary mb-3 rounded-pill">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;