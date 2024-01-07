import React from 'react'
import { categories } from '../../data/data'

const FoodCatagories = () => {
  return (
    <div>
         <h1 className='text-2xl m-auto w-full text-orange-400 text-center pt-4'>Top Catagories</h1>

         <div className='w-full grid grid-cols-2 lg:grid-cols-6 gap-5 py-5 px-2'>
            {
                categories.map(item =>(
                    <div key={item.id} className='flex p-4 justify-center items-center hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-40 h-10' />
                    </div>
                ))
            }

         </div>
    </div>
  )
}

export default FoodCatagories
