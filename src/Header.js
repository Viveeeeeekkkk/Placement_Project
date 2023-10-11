import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Dropdown from 'react-bootstrap/Dropdown'; */
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>

      <div className='web_main_img'>
        <Link to={"/"}><img className = "mgit__logo" src="https://mgit.ac.in/wp-content/uploads/2022/09/logo5-mgit-25-09-2022.png" alt='mgit logo'></img></Link>
      </div>


      <div className='right_components'>
        <div className='user_icon'><PersonIcon/></div>
        <Link to={"/login1"}>
          <div className='optionsss'>
            <span className='option_line_1'>Student</span>
            <span className='option_line_2'>Login</span>
          </div>
        </Link>
        <Link to={"/login2"}>
          <div className='optionsss'>
            <span className='option_line_1'>Faculty</span>
            <span className='option_line_2'>Login</span>
          </div>
        </Link>
        <Link to={"/login3"}>
          <div className='optionsss'>
            <span className='option_line_1'>Recruiter</span>
            <span className='option_line_2'>Login</span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Header