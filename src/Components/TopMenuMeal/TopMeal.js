import React, { useState } from 'react'
import { mealData } from '../../data/data'
import { FaArrowRight } from "react-icons/fa6";
import { Button } from 'react-bootstrap';
import './topMeal.css'


const TopMeal = () => {
    const[mealCatagoryFood, setMealCatagoryFood] = useState(mealData)

    const fillterCatagory = (catagory) =>{

        setMealCatagoryFood(
            mealData.filter(item => item.category === catagory)
        )

    }
  return (
    <div className='m-auto w-full py-2 pt-4'>
        <h1 className='text-2xl text-orange-400 text-center'>Top Meal</h1>

        <div className='flex justify-center gap-3 py-4'>
            <Button onClick={()=> setMealCatagoryFood(mealData)} className='menu_catagory'>All</Button>
            <Button onClick={()=>  fillterCatagory('pizza')} className='menu_catagory'>Pizza</Button>
            <Button onClick={()=> fillterCatagory('chicken')} className='menu_catagory'>Chicken</Button>
            <Button onClick={()=> fillterCatagory('salad')} className='menu_catagory'>Salad</Button>
            

        </div>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 px-3'>
            {
                mealCatagoryFood.map(mealItem => (
                    <div className='hover:scale-105 duration-300' key={mealItem.id} >
                       <img  
                       className='w-full h-[200px] rounded-lg md:rounded-xl md:object-cover'
                       src={mealItem.image} alt={mealItem.name} />

                       <div className='flex justify-between py-2 px-2'>
                        <span className='font-bold'>
                            {mealItem.name}
                        </span>

                        <span className='bg-orange-400 text-center p-2 rounded-full  border-8 -mt-9 text-white font-bold'>
                            {mealItem.price}
                        </span>
                       </div>

                       <div className='px-2 flex items-center text-indigo-400'>
                         <span className='pb-1'>
                            View More 
                         </span>
                         <FaArrowRight />
                      </div>
                      
                    </div>
                ))
            }

        </div>
      
    </div>
  )
}

export default TopMeal
