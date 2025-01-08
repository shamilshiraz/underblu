import React, { useRef } from 'react'
import { motion, useScroll  } from 'framer-motion';


function About() {


  return (
    <div className='h-[auto] text-swblue font-ed'>
        <div className="pt-[80px]" >
            <div className="about flex sm:text-2xl text-xl justify-center">
            <img src="./part1.png" className='h-[30px]' alt="" />
            <img src="./part2.png" className='h-[30px]' alt="" />
            <p>About</p>
            <img src="./part3.png" className='h-[30px]' alt="" />
            <img src="./part4.png" className='h-[30px]' alt="" />
            </div>
            <p             data-aos="fade-up"
 className='flex justify-center text-6xl sm:text-9xl'>Spill the coffee!!</p>
            <div 
            className="pt-[5rem] px-2 text-xl sm:text-2xl sm:text-center font-hel">
                <p             data-aos="fade-up"
                >UnderBlu is a coastal-inspired coffee cafe that blends creativity with community. We value individuality and collaboration in a relaxed yet lively atmosphere, making it the perfect space for both personal reflection and creative collaboration. 

                    
                </p>
                <br />
                <p             data-aos="fade-up"
                >More than  just a cafe, UnderBlu is a space where artists, entrepreneurs,  and anyone looking for connection can support each other and  grow together.</p>
                <br />
                <div className="flex justify-center">
  <img src="./bnwart.jpeg" className="" alt="" />
</div>
            </div>
            <br />
        </div>
    </div>
  )
}

export default About
