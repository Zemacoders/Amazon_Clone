import React, { useState } from 'react'
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Signup = () => {
   const [formData , setFormData]=useState({
    name:'',
    emailOrPhone:'',
    password:'',
    confirmPassword:''
   })
   const [errors , setError]=useState({});

   const handleChange =(e)=>{
    const {id , value} = e.target;;
    setFormData(prev => ({...prev , [id]:value}))
   }

   const validateForm =()=> {
    const newError ={};

    if(!formData.name.trim()) newError.name ='Name is required';
    if(formData.emailOrPhone.trim()) newError.emailOrPhone = 'email or phone is required'
    if(formData.password.length <6) newError.password= 'Password must be at least 6 characters';
    if(formData.password !=formData.confirmPassword) newError.confirmPassword ='Password do no match'
    setError(newError)
    return Object.keys(newError).length === 0
   }

   const handleSubmit =(e)=> {
    e.preventDefault();
    if(validateForm){

    }
   }

  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-12  '>
      <div className=" w-full gap-4 max-w-sm space-y-8 ">
        <div className='flex justify-center'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className=' w-28  h-auto' alt="logo" />
        </div>

        <div className='border border-black rounded-md py-4 px-3 space-y-4 min-w-[332px]'>
          <h1 className='text-3xl font-semibold'>Create account</h1>
          <form onSubmit={handleSubmit} className='space-y-4'>

            <div>
              <label htmlFor="name" className=' block text-sm font-medium'>Your name</label>
              <input  type="text" id='name' value={formData.name} onChange={handleChange} className={`mt-1 block w-full rounded-sm outline-none border-[1.5px] border-gray-300 shadow-sm focus:border-yellow-400 p-1.5  mb-2 focus:ring-1 focus:ring-yellow-400 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`} />
              {errors.name && <p className='mt1 text-sm text-red-600'>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="emailOrPhone" className=' block text-sm font-medium'>Mobile number or email </label>
              <input  type="email || tel" id='email' value={formData.emailOrPhone} onChange={handleChange} className={`mt-1 block w-full rounded-sm outline-none border-[1.5px] border-gray-300 shadow-sm focus:border-yellow-400 p-1.5  mb-2 focus:ring-1 focus:ring-yellow-400 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`} />
              {errors.emailOrPhone && <p className='mt1 text-sm text-red-600'>{errors.name}</p>}

            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium ">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-sm outline-none border-[1.5px] border-gray-300 shadow-sm focus:border-yellow-400 p-1.5  mb-2 focus:ring-1 focus:ring-yellow-400 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.password ? (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              ) : (
                <p className="mt-1 text-sm text-gray-500 flex items-center gap-2"><span className='w-6 h-6  inline-flex items-center justify-center rounded-full p-1 text-lg text-white bg-blue-600'>!</span> Passwords must be at least 6 characters</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium ">
                Re-enter password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-sm outline-none border-[1.5px] border-gray-300 shadow-sm focus:border-yellow-400 p-1.5  mb-2 focus:ring-1 focus:ring-yellow-400 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            <button type='submit' className='bg-[#ffd814] text-black px-3 py-1 rounded-full w-full '>Continue</button>
          </form>
          <p className='mt-2 text-sm '> Already have an account?<Link className="ml-1 text-blue-600 hover:text-blue-800 inline-flex items-center" to='login'> Sign in <LiaAngleRightSolid className="ml-1" /></Link></p>
        </div>
      </div>

    </div>
  )
}

export default Signup




