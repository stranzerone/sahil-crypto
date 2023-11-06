import React from 'react'
import './Style.css';
import link from '../../Images/link.gif'
import speaker from '../../Images/speaker.gif'
import seo from '../../Images/seo.gif'
function Midsetcion() {
  return (
    <div className='bg-white mid-section '>
   
<h1 className='text-center fw-bolder text-capitalize mt-5'>what you can do <br/> with this app</h1>
<hr className='w-25 mx-auto'/>
<div className='d-grid  d-md-flex'>
<div className=' col-md-4 col-lg-4'>
<div className='card-box rounded-2 text-center'>
<img src={link} alt='auto' className='img-fluid' width={"170px"}/>
<h5>Great Investments</h5>
<p className='mx-4 text-center'>loanf angla v aifjo cnoawie  ncoewi cnoew fc oewia cnewo  cneow fnwoae c newo cnewo cneow fcmoaew noanweoi cnoeiw ceno cneonafn cnoean nceownncoew</p>
<a className='icon-span w-25'>
<i class="fa-solid fa-arrow-right "></i>
</a>
</div>

</div>
<div className=' col-md-4 col-lg-4'>
<div className='card-box  text-center'>
<img src={seo} alt='auto' className='img-fluid' width={"170px"}/>
<h5 className='py-2'>Extraa Income</h5>
<p className='mx-4 text-center'>loanf angla v aifjo cnoawie  ncoewi cnoew fc oewia cnewo  cneow fnwoae c newo cnewo cneow fcmoaew noanweoi cnoeiw ceno cneonafn cnoean nceownncoew</p>
<a className='icon-span w-25'>
<i class="fa-solid fa-arrow-right "></i>
</a>
</div>

</div>
<div className='col-12 col-md-4 col-lg-4'>
<div className='card-box rounded-2 text-center'>
<img src={speaker} alt='auto' className='img-fluid' width={"170px"}/>
<h5>Learn Crypto</h5>
<p className='mx-4 text-center'>loanf angla v aifjo cnoawie  ncoewi cnoew fc oewia cnewo  cneow fnwoae c newo cnewo cneow fcmoaew noanweoi cnoeiw ceno cneonafn cnoean nceownncoew</p>
<a className='icon-span w-25'>
<i class="fa-solid fa-arrow-right "></i>
</a>
</div>

</div>
</div>
    </div>
  )
}

export default Midsetcion