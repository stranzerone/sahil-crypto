import React from 'react'
import "./Style.css"
import "./responsiveStyle.css"
import video from '../../Images/hero.mp4'
import { NavLink, Navigate } from 'react-router-dom'
export default function Hero() {
  return (
    <div>
    <div className='heroMain'>
   
    <div className=' heroCoin d-grid  d-sm-flex  flex-sm-row '>
    
<div className='col-12 flex-column my-5 col-md-6 col-lg-6  order-2 order-md-1s text-center hero-section '>
    <h1 className='text  text-capitalize text-center  text-white fw-bolder pt-4  word-spacing-4  text-center ' >it can make you <br/> the billionire</h1>
    <p className='text-white text-center my-5'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
<div className='text-center w-100 px-5 py-2'>
<button   className='btn btn-primary'> Explore </button>
</div>
</div>

<div className='col-12 col-md-6 col-lg-6 img-fluid d-flex justify-content-center align-items-center' >
<video src={video} loop autoPlay muted className='video-section'> Your Brower does not support this video tag</video>

</div>
<div class="custom-shape-divider-bottom-1696838868  d-none d-sm-flex" >
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

    </div>
    
   



</div>
    </div>

  )
}
