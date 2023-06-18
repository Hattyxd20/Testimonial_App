import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
import '../styles/card.css'
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa'

const Card = (props) => {
     const review=props.review;
  return (
      <div className="relative flex flex-col">
           <div className='absolute top-[-7rem] z-10' >
               <img  src={review?.image} alt=""
                className="image"
               />
               <div className='w-[140px] h-[140px] bg-purple-500 rounded-full absolute top-[-6px] left-[10px] z-[-10]'>

               </div>
           </div>

           <p className='font-bold text-2xl capitalize mt-7'>{review?.name}</p>
           <p className='text-violet-500 uppercase text-sm'>{review?.job}</p>

           <div className='text-violet-400 mx-auto mt-4' >
                <FaQuoteLeft/>
           </div>

           <p className='mt-4 text-slate-500'>{review?.text}</p>

           <div className='text-violet-400 mx-auto mt-4'>
               <FaQuoteRight/>
           </div>

          


      </div>
  )
}

export default Card