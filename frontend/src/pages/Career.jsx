import React, { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Careers = () => {
  const { backendUrl } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    contribution: ""
  });

  const [resume, setResume] = useState(null);
  const onChangeHandler = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({
        ...data,
        [name]: value
    }));

  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
        const data = new FormData();
        data.append("fullName", formData.fullName);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("skills", formData.skills);
        data.append("contribution", formData.contribution);
        data.append("resume", resume);

        const response = await axios.post(
            backendUrl + "/api/career/apply",
            data
        );

        if(response.data.success){

            toast.success(response.data.message);

            setFormData({
                fullName:"",
                email:"",
                phone:"",
                skills:"",
                contribution:""
            });

            setResume(null);
        }
        else{
            toast.error(response.data.message);
        }
    }
    catch(error){
        console.log(error);
        toast.error(error.message);

    }

  }
  return (
    
    <div className='px-4 py-10 sm:px-6 lg:px-8'>
        
      <div className='max-w-4xl mx-auto'>
        <div className='text-2xl mb-3'>
        <Title text1={'CAREERS AT '} text2={'SHRI BALAJI FOODS'} />
        </div>
        <form onSubmit={onSubmitHandler} className='space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name *</label>
              <input name="fullName" value={formData.fullName} onChange={onChangeHandler} className='w-full border border-gray-300 rounded-lg px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200' type='text' placeholder='Your name' required />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Email *</label>
              <input name="email" value={formData.email} onChange={onChangeHandler} className='w-full border border-gray-300 rounded-lg px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200' type='email' placeholder='your@email.com' required />
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Phone *</label>
              <input name="phone" value={formData.phone} onChange={onChangeHandler} className='w-full border border-gray-300 rounded-lg px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200' type='tel' placeholder='+91 XXXXX XXXXX' required />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Core Skills *</label>
              <input name="skills" value={formData.skills} onChange={onChangeHandler} className='w-full border border-gray-300 rounded-lg px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200' type='text' placeholder='e.g. Sales, React, Management' required />
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Upload Resume (PDF/DOC) *</label>
            <label className='flex items-center justify-between w-full border border-dashed border-gray-300 rounded-xl bg-gray-200 px-4 py-4 cursor-pointer'>
              <span className='text-sm text-gray-600'>Choose File</span>
              <span className='text-xs text-gray-500'>{resume ? resume.name : "No file chosen"}</span>
              <input className='hidden' type='file' accept='.pdf,.doc,.docx' onChange={(event) => setResume(event.target.files[0])} required />
            </label>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>How can you contribute to our growth? *</label>
            <textarea name="contribution" value={formData.contribution} onChange={onChangeHandler} className='w-full border border-gray-300 rounded-xl px-4 py-3 min-h-[160px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200' placeholder='Tell us about your experience and the value you bring...' required></textarea>
          </div>
          <div className='text-center'>
            <button className=' border border-gray-300 inline-flex items-center justify-center w-full sm:w-auto bg-white text-black rounded-xl px-8 py-3 font-medium hover:bg-black hover:text-white transition'>Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Careers