import React from 'react'
import {Container} from 'react-bootstrap'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16'>
        <h3 className='text-2xl font-bold text-orange-400  text-center'>Quick Delivery App</h3>

        <Container className='w-full mx-auto grid md:grid-cols-2'>
            <img 
            className='w-[550px] my-4 mx-auto'
            src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' alt='Quick Delivery App' />

            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='text-2xl md:text-4xl  sm:text-3xl font-bold py-2'>Limitless convenience on-demand</h1>
                <p>Let's take most of the money we would've spent on paid advertising and paid marketing and instead of spending it on that, invest it in the customer experience/customer service and then let our customers do the marketing for us through word of mouth.</p>

                <button className='bg-black mx-auto w-[200px] rounded-lg text-[#00df9a] font-medium my-3 md:mx-0 py-3'>
                   Get Start
                </button>
            </div>

        </Container>
     
    </div>
  )
}

export default Delivery
