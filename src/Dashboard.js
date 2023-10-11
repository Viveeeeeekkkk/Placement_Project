import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='dashb_header'>
          <div className='welcome_name'>
            Hello, Nallapati Koteswara Sai Vivek   {/* Here, student name should appear */}
          </div>
          <div className='other_options'>
            <span className='optionnnn'>My Applications</span>
            <span className='optionnnn'>My Info</span>
            <span className='optionnnn'>Logout</span>
          </div>
        </div>
        <div className='dashb_main_1'>
          Dashboard
        </div>
        <hr id='line' style={{margin: "0px 80px",color: "black"}}></hr>
    </div>
  )
}

export default Dashboard