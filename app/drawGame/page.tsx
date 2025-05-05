"use client"
import React, { useState } from 'react'



function page() {
    const [xpos,SetXpos]=useState(0)
    const [ypos,SetYpos]=useState(0)
    function Draw(){
        console.log("drawing")
        return (<div className={`size-5 absolute bg-black`} style={{
            top: ypos,
            left: ypos,
          }}></div>)
    }
   const  handelClick = (e:EventListener)=>{
        SetXpos(e.clientX)
         SetYpos(e.clientY)
     
   }            
  return (
    <div className='bg-white w-screen h-screen ' onClick={(e)=>{handelClick(e)}}>
        <Draw  />
    </div>
  )
}



export default page