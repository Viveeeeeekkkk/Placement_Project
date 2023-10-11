import React from 'react';
import './Login1.css';
import { Link } from 'react-router-dom';

function Login1() {


  return (
    <div className='login_class_1'>
      <div className='row1_1'>
        <form className='container_1' action=''>
          <p className='heading_1'>Student Login</p>
          <div className='userID'>
            <span className='rowww1'>Email / roll no</span>
            <span className='rowww2'><input type='text' size={33} name='rollno' ></input></span>
          </div>
          <div className='password'>
            <span className='rowww1'>Password</span>
            <span className='rowww2'><input type='password' size={33} name='password'></input></span>
          </div>
          <div className='extra_op'>
            <span><input type='checkbox'></input></span> <span>Remember me</span>
          </div>
          <Link to={"/dashb"}><div><button className='button1' type='submit'>Log in</button></div></Link>
          <div className='extra_op'>
            <span>Forgot password?</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login1