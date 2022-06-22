import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div style={{background: "white"}}>
            <div className="container pt-3">
                <form className='mx-auto w-50 bg-white px-5 pt-5 pb-3 border'>
                <h3 className='pb-4 text-start'>Create an Account</h3>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='First Name' />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Last Name' />
                    </div>
                    <button type="submit" className="btn btn-warning mb-3">Create an Account</button>
                    <p>Already have an account? <Link to="/login" className='text-warning'>Login</Link></p>
                </form><br />
                <p>------------------------------------------ Or ------------------------------------------</p>
                <button type="submit" className="btn btn-primary mb-3 me-2 rounded-pill">Continue with Facebook</button>
                <button type="submit" className="btn btn-secondary mb-3 rounded-pill">Continue with Google</button>
            </div>
        </div>
    );
};

export default Register;