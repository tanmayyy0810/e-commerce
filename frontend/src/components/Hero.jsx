import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-green-400 '> 
        {/*left side hero ka */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'> 
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>Since 2018</p>


                </div>
                <h1 className='prata-regular  text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Locked in <span className='prata-regular font-bold text-emerald-600'>Freshness</span>,</h1>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed font-bold'>Served with <span className='prata-regular font-bold text-orange-500'>Love</span>.</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>Explore the new trends</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>


            </div>
        </div>
        {/*right side hero ka */}
        {/* <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" /> */}
        {/* Notice the via-[#3ea05c] change here */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-8 px-6 sm:py-0 sm:px-12 bg-gradient-to-r from-[#184424] via-[#32864b] to-[#184424] bg-[length:200%_200%] animate-gradient sm:min-h-[450px]'>
    
    {/* 3. Changed aspect-[3/2] to aspect-video (16:9 ratio) to drastically shorten the invisible wrapper on mobile */}
    <div className='relative w-full max-w-[320px] sm:max-w-[450px] aspect-video sm:aspect-[4/3]'>
        
                {/* Product 1: Sweet Corn */}
                <img 
                    src={assets.sweet_corn} 
                    alt="Sweet Corn" 
                    className='absolute w-[33%] left-[3%] bottom-[20%] origin-bottom rotate-[-30deg] z-10 transition-all duration-300 ease-out hover:rotate-0 hover:scale-110 hover:-translate-y-4 hover:z-50 drop-shadow-2xl cursor-pointer object-contain' 
                />

                {/* Product 2: Green Peas (Center Left) | 10 deg tilted left, bottom 25% */}
                <img 
                    src={assets.green_peas} 
                    alt="Green Peas" 
                    className='absolute w-[30%] left-[23%] bottom-[30%] origin-bottom rotate-[-10deg] z-20 transition-all duration-300 ease-out hover:rotate-0 hover:scale-110 hover:-translate-y-4 hover:z-50 drop-shadow-2xl cursor-pointer object-contain' 
                />

                {/* Product 3: Soya Chaap (Center Right) | 10 deg tilted right, bottom 25% */}
                <img 
                    src={assets.soya_chaap} 
                    alt="Soya Chaap" 
                    className='absolute w-[36%] right-[23%] bottom-[29%] origin-bottom rotate-[10deg] z-30 transition-all duration-300 ease-out hover:rotate-0 hover:scale-110 hover:-translate-y-4 hover:z-50 drop-shadow-2xl cursor-pointer object-contain' 
                />

                {/* Product 4: French Fries (Rightmost) | 30 deg tilted right, bottom 10% */}
                <img 
                    src={assets.french_fries} 
                    alt="French Fries" 
                    className='absolute w-[35%] right-[1%] bottom-[22%] origin-bottom rotate-[30deg] z-40 transition-all duration-300 ease-out hover:rotate-0 hover:scale-110 hover:-translate-y-4 hover:z-50 drop-shadow-2xl cursor-pointer object-contain' 
                />

                    
                
            </div>
        </div>
    </div>
  )
}

export default Hero
