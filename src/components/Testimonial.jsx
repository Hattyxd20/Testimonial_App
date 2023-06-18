import React from 'react'
import Card from './Card'
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'


const Testimonial = ({reviews}) => {
    const[index,setIndex] = useState(0);

    const leftShiftHandeler = () => {
           if(index-1 < 0){
              let length=reviews.length;
              setIndex(length-1);
           }

           else{
            setIndex(index-1)
           }
    }

    const rightShiftHandeler = () => {
        let length =reviews.length; 
         if(index+1 >= length ){
              setIndex(0);
         }

         else{
            setIndex(index+1);
         }
    }

    const surpriseHandeler = () => {
           const randIndex = Math.floor(Math.random()*reviews.length);

           setIndex(randIndex);
    }
           
    
    
  return (
       
       <div className='w-[85vw] md:w-[700px] bg-white  mt-10 p-10 transition-all duration-200 flex flex-col items-center justify-center hover:shadow-xl rounded-md'>
           <Card review={reviews[index]}/>

            <div className='flex text-3xl mt-9 gap-3 text-violet-400 font-bold justify-center items-center'>
               <button onClick={leftShiftHandeler} className='cursor-pointer hover:text-violet-500'>
                 <FaChevronLeft/>
               </button>
               <button onClick={rightShiftHandeler} className='cursor-pointer hover:text-violet-500'>
                  <FaChevronRight/>
               </button>
           </div>

           <button onClick={surpriseHandeler} className='bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md
            font-bold text-white text-lg mt-4 self-center'>
              Surpise Me
           </button>
       </div>
  )
}

export default Testimonial