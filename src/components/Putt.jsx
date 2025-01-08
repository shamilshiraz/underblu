import React from 'react'

function Putt() {
  return (
<div className='flex flex-col justify-center w-[100vw] h-[auto]'>
  <div className="mt-[80px] font-ed text-swblue w-full text-3xl sm:text-5xl flex flex-col justify-center items-center">
    <p             data-aos="fade-up"
    >Putt & coffee!</p>
    <p             data-aos="fade-up"
    >Putts brewing story...</p>
  </div>
  <div className="my-[80px] font-ed text-swblue sm:w-full text-3xl sm:text-5xl flex flex-col justify-center items-center h-[] sm:p-5 px-[10px]">
  <img src="./swputt.jpg" className="h-[150px] w-[250px] mx-auto" alt="" />
  </div>
  <div className="font-ita w-full text-swblue text-xl sm:text-2xl px-2 flex flex-col sm:items-center sm:text-center">
  <p             data-aos="fade-up"
 className='sm:w-[50%] mx-auto'>
    UnderBlu is a coastal-inspired coffee cafe that blends creativity with community. We value individuality and collaboration in a relaxed yet lively atmosphere, making it the perfect space for both personal reflection and creative collaboration.
  </p>
  <br />
  <p             data-aos="fade-up"
 className='sm:w-[50%] mx-auto'>
    More than just a cafe, UnderBlu is a space where artists, entrepreneurs, and anyone looking for connection can support each other and grow together.
  </p>
</div>

</div>

  )
}

export default Putt
