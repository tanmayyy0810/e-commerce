import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className=' flex flex-col sm:grid grid-cols-[2.5fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" className='w-40 mb-5' />
                <p className='w-full md:w-2/3 text-gray-600'>Your trusted partner for all your shopping needs. Quality products at competitive prices. </p>
                <p className='text-l font-medium mb-5 pt-10'>CERTIFICATIONS: <img src={assets.fssai} alt="" className='w-32 mb-5' /></p>
                

            </div>
            <div>
                <p className='text-xl font-medium mb-5'>QUICK LINKS</p>
                <ul className='text-gray-600 flex flex-col gap-2'>
                    <li><a href="/" className='hover:text-gray-900 transition-colors'>Home</a></li>
                    <li><a href="/products" className='hover:text-gray-900 transition-colors'>Products</a></li>
                    <li><a href="/about" className='hover:text-gray-900 transition-colors'>About Us</a></li>
                    <li><a href="/contact" className='hover:text-gray-900 transition-colors'>Contact Us</a></li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>POLICIES</p>
                <ul className='text-gray-600 flex flex-col gap-2'>
                    <li><a href="/privacy-policy" className='hover:text-gray-900 transition-colors'>Privacy Policy</a></li>
                    <li><a href="/shipping-delivery-policy" className='hover:text-gray-900 transition-colors'>Shipping Policy</a></li>
                    <li><a href="/refund-cancellation-policy" className='hover:text-gray-900 transition-colors'>Refund Policy</a></li>
                    <li><a href="/terms-conditions" className='hover:text-gray-900 transition-colors'>Terms & Conditions</a></li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
                <ul className='text-gray-600 flex flex-col gap-2 mb-6'>
                    <li>
                        <a href="tel:+917830050803" className='hover:text-gray-900 transition-colors'>
                            +91 7830050803
                        </a>
                    </li>
                    <li>
                        <a href="mailto:shribalajifoodsindia@gmail.com" className='hover:text-gray-900 transition-colors'>
                            shribalajifoodsindia@gmail.com
                        </a>
                    </li>
                    <li>Poiya Village, Hathras Road, Agra, Uttar Pradesh, India</li>
                </ul>
                <div className='mt-8 pt-6 border-t border-gray-200'>
                    <p className='text-sm font-medium text-gray-700 mb-3'>FOLLOW US</p>

                    <div className='flex gap-4'>
                        <a
                            href="https://instagram.com/tajfresh.india"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:opacity-80 transition-colors"
                        >
                            <img
                                src={assets.insta_icon}   // or your image path
                                alt="Instagram"
                                className="w-10 h-10"
                            />
                        </a>

                        
                        <a
                            href="https://www.facebook.com/profile.php?id=61591334710369"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:opacity-80 transition-colors"
                        >
                            <img
                                src={assets.facebook_icon}   // or your image path
                                alt="Facebook"
                                className="w-10 h-10"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/shri-balaji-foods-agra/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:opacity-80 transition-colors"
                        >
                            <img
                                src={assets.linkedin_icon}   // or your image path
                                alt="Linkedin"
                                className="w-10 h-10"
                            />
                        </a>
                        <a
                            href="https://instagram.com/tajfresh.india"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:opacity-80 transition-colors"
                        >
                            <img
                                src={assets.x_icon}   // or your image path
                                alt="X"
                                className="w-10 h-9.5"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className='sm:col-span-4'>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2024 Shri Balaji Foods. All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer
