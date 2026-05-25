import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import {PropagateLoader} from "react-spinners"


export const Success = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 3000);
  },[]);

  const clearCart = async () => {
    const res = await axios.get("http://localhost:5000/api/clear-cart");
    const data = await res.data
    toast.Success(data.message);
  }

  useEffect(() => {
     clearCart();
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
       {
         loading ?  ( <PropagateLoader color='#36d7b7' />
          ) : ( 
      <div>
       <h2 className='text-3xl font-semibold mb-4 text-center'>Oder Successfull! </h2> 
       <p>Your order has been Successfully placed </p>
       </div>
      )}
    </div>
  )
}
