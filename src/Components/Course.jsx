import React from 'react';
import { Link } from 'react-router-dom'

const Course = ({coursename}) => {
  return (
    
    
    <div className=" flex flex-col bg-white
    rounded-md m-5">


       <p className="h-40 w-56 bg-white 
       bg-[url('/images/a2.png')] bg-cover bg-center bg-no-repeat
       text-center py-14 text-3xl
       text-black font-semibold
       ">{coursename}</p>

       
       <div className="flex justify-between items-end h-10 
       mb-2">
        <p className="p-1">10 question</p>
        <p className="p-1">Total Points : {10*5}</p>
       </div>


    </div>
    
  )
}

export default Course