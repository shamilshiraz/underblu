import { motion } from 'framer-motion'
import React from 'react'


function Putt() {
  return (
<div className='flex flex-col justify-center w-[100vw] h-[auto] items-center'>
  <div className="mt-[80px] font-ed text-swblue w-full text-3xl sm:text-5xl flex flex-col justify-center items-center">
    <p             data-aos="fade-up"
    >Putt & coffee!</p>
    <p             data-aos="fade-up"
    >Putts brewing story...</p>
  </div>
  <div className="my-[80px] font-ed text-swblue sm:w-full text-3xl sm:text-5xl flex flex-col justify-center items-center h-[] sm:p-5 px-[10px]">
  <img src="./swputt.jpg" className="h-[150px] w-[150px] mx-auto" alt="" />
  </div>
  <div className="font-hel w-full text-swblue text-xl sm:text-2xl px-2 flex flex-col sm:items-center sm:text-center">
  <p             data-aos="fade-up"
 className=' sm:mx-[10%]'>
Putt is one of those rare people who truly lives and breathes coffee. It’s not just about brewing for him; it’s about understanding every detail, from the bean to the cup. Whether it’s a simple pour-over or a rich espresso, he has this natural ability to make every cup feel like a moment to savor. His passion for coffee is infectious—each brew is a reflection of his deep connection to the craft.  </p>
  <br />
  <p             data-aos="fade-up"
 className='sm:mx-[10%]'>
But what really makes Putt special is his creative spark. He doesn’t just follow the usual path; he’s constantly experimenting and thinking outside the box. Whether he’s playing around with new brewing methods or coming up with ideas that no one’s ever tried before, he’s always pushing the envelope. His approach to coffee feels fresh, and it’s clear that every idea he has is born from a place of pure passion and innovation.  </p>
</div>

</div>

  )
}

export default Putt
