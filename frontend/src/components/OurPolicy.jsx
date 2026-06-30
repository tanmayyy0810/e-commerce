import React from 'react'
import {assets} from '../assets/assets'


const OurPolicy = () => {
  return (
    <div className=' flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5 ' />
            <p className='font-semibold'>No Exchange Policy</p>
            <p className='w-3/4 m-auto text-gray-400'>We do not offer exchanges for our products. Please choose carefully before making a purchase.</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5 ' />
            <p className='font-semibold'>Quality Policy</p>
            <p className='w-3/4 m-auto text-gray-400'>We are committed to providing high-quality products that meet our customers' expectations.</p>
        </div>
        <div>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5 ' />
            <p className='font-semibold'>Support Policy</p>
            <p className='w-3/4 m-auto text-gray-400'>We provide excellent customer support to ensure your satisfaction with our products.</p>
        </div>
      
    </div>
  )
}

export default OurPolicy
