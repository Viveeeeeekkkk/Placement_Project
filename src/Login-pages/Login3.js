import React from 'react';
import './Login1.css';

function Login3() {
  return (
    <div className='login_class_1'>
      <div className='row1_1'>
        <div className='container_1'>
          <p className='heading_1'>Recruiter Login</p>
          <div className='userID'>
            <span className='rowww1'>User Id</span>
            <span className='rowww2'><input type='text' size={33}></input></span>
          </div>
          <div className='password'>
            <span className='rowww1'>Password</span>
            <span className='rowww2'><input type='password' size={33}></input></span>
          </div>
          <div className='extra_op'>
            <span><input type='checkbox'></input></span> <span>Remember me</span>
          </div>
          <div><button className='button1'>Log in</button></div>
          <div className='extra_op'>
            <span>Forgot password?</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login3