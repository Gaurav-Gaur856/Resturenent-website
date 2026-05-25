import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';

export const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault();

        const res =await axios.post(`http://localhost:5000/api/signup`, {name,email,password })
        const data = await res.data;
        if(res.status === 201){
            toast.success(data.message);
            navigate('/login');
        }
        else if( res.status === 500){
            toast.error(data.message);
        } 
    }

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <form onSubmit={handleSignup}
                 className='bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[20vw] text-sm'>

                    <input
                        type='name'
                        name='name'
                        id='name'
                        className='outline-none border rounded-md px-3 py-2 focus:border-green-300 text-gray-600'
                        autoComplete='off'
                        placeholder='enter the name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type='email'
                        name='email'
                        id='email'
                        className='outline-none border rounded-md px-3 py-2 focus:border-green-300 text-gray-600'
                        autoComplete='off'
                        placeholder='enter the email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        className='outline-none border rounded-md px-3 py-2 focus:border-green-300 text-gray-600'
                        autoComplete='off'
                        placeholder='enter the password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link to="/forget-password" className='text-xs text-gray-600 hover:underline cursor-pointer -mb-1'>
                        Forgot Password
                    </Link>
                    <button type='submit'
                        className='outline-none border rounded-md px-3 py-2 text-white bg-green-500
                           hover:bg-green-300'>
                        SignUp
                    </button>
                    <p className='text-xs text-gray-600 flex gap-2 -mt-1'>
                        <span>Or</span>
                        <Link to='/login' className='hover:text-green-600'>
                         Login to your account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
