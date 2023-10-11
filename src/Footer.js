import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_components'>
          <span className='icon'>
            <a href='https://www.instagram.com/mgithyderabad/'><i class="fa fa-instagram"></i></a>
          </span>

          <span className='icon'>
            <a href='https://twitter.com/mgithyd'><i class="fa fa-twitter"></i></a>
          </span>

          <span className='icon'>
            <a href='https://www.youtube.com/@mgithyd'><i class="fa fa-youtube-play"></i></a>
          </span>
        </div>
    </div>
  )
}

export default Footer