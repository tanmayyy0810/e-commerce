import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { useNavigate } from 'react-router-dom'
import MapSection from "../components/MapSection";

const Contact = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=''/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Story</p>
          <p className='text-gray-500'> address<br/> adres</p>
          <p className='text-gray-500'> mob <br/>email</p>
          <p className='font-semibold text-xl text-gray-600'> Careers At SBF</p>
          <p className='text-gray-500'> more about</p>
          <button onClick={() => navigate('/careers')} className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>




        </div>
        

      </div>
      <NewsletterBox/>
      <div>
      <MapSection />
    </div>
    </div>
  )
}

export default Contact
