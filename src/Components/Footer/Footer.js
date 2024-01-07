import React from 'react'
import { Button } from 'react-bootstrap'
//lg:flex  md:flex-col  justify-between items-center px-2
const Footer = () => {
  return (
    <div className='w-full mx-auto bg-gray-500 py-3 px-3'>
        <div className='w-full grid justify-center items-center grid-cols-1 lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <span className='text-3xl'>
                    Need advice on how to improve your flow?
                </span>
                <p>
                    Sign Up to join our newsletter and stay up to data.
                </p>
            </div>
            <div className='my-3'>
                <div className='flex flex-col  sm:flex-row items-center justify-between gap-2 w-full'>
                  
                    <input type='email' placeholder='Enter your email'
                    className='p-1 w-full focus:outline-none'
                     />
              
                    <Button className='w-[200px]' >Notifiy Me</Button>
                </div>
               
               

               
                    <p>We are concerned about the security of your data, Read{" "}
                        <span className='text-[#00df9a]'>Privacy policy</span>
                    </p>
              
            </div>

           <hr className='border-gray-700' />
            

        </div>
      
    </div>
  )
}

export default Footer
