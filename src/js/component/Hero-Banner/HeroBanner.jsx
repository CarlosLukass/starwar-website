import React from 'react'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <div className='vh-100 d-flex flex-column justify-content-center align-items-center text-white text-center'>
      <div>
        <h1 className='title'>YOUR JEDI</h1>
        <h1 className='title-outline'>JOURNEY</h1>
        <p className='description'>Find anything you want to know about the greatest universe of star wars<br /> and create your own journey with your favorite content</p>

      </div>
      <div className='position-absolute bottom-0 pb-4 d-flex flex-column align-items-center'>
        <span>Scroll Down</span>
        <img src="https://colwagen.com/carplusweb/wp-content/themes/carplus/img/scroll-down-icon-home.gif" width={70} alt="" />
      </div>
    </div>
  )
}

export default HeroBanner