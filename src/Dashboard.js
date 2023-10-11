import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='dashb_header'>
          <div className='welcome_name'>
            Hello Nallapati Koteswara Sai Vivek
          </div>
          <div className='other_options'>
            <span className='optionnnn'>My Applications</span>
            <span className='optionnnn'>My Info</span>
            <span className='optionnnn'>Logout</span>
          </div>
        </div>
        <div className='dashb_main'>This is your Dashboard</div>
    </div>
  )
}

export default Dashboard