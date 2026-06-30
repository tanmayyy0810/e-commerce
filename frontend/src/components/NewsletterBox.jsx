import React, { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'

const NewsletterBox = () => {

    const { backendUrl } = useContext(ShopContext);

    const [email, setEmail] = useState("");

    const onSubmitHandler = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                backendUrl + "/api/newsletter/subscribe",
                { email }
            );

            if (response.data.success) {

                toast.success(response.data.message);
                setEmail("");

            } else {

                toast.error(response.data.message);

            }

        } catch (error) {

            console.log(error);
            toast.error(error.message);

        }

    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe to our newsletter for the latest updates and offers!</p>
            <p className='text-gray-400 mt-3'>Enter your email address below to stay updated!</p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex itms-center gap-3 mx-auto my-6 border pl-3'>
                <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>

            </form>
        </div>
    )
}

export default NewsletterBox
