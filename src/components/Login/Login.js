import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div style={{background: "white"}}>
            <div className="container pt-5">
                <form className='mx-auto w-50 bg-white p-5 border'>
                <h3 className='pb-4 text-start'>Login</h3>
                    <div className="mb-5">
                        {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 text-start">
                        <input type="checkbox" className="me-2" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-warning login-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;