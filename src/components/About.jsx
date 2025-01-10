import React, { useRef } from 'react'
import { motion, useScroll, useTransform  } from 'framer-motion'



function About() {
  const container=useRef()
  const{scrollYProgress}=useScroll({
    target:container,
    offset:['5vh start','end 10vh']  
  })

  const scale=useTransform(scrollYProgress,[0,1],[1.3,1])

  return (
    <div
    ref={container} 
     className='h-[auto] text-swblue font-ed flex justify-center flex-col '>
        <div className="pt-[80px]" >
            <div className="about flex sm:text-2xl text-xl justify-center">
            {/* <img src="./part1.png" className='h-[30px]' alt="" />
            <img src="./part2.png" className='h-[30px]' alt="" /> */}
            <p>About</p>
            {/* <img src="./part3.png" className='h-[30px]' alt="" />
            <img src="./part4.png" className='h-[30px]' alt="" /> */}
            </div>
            <div             data-aos="fade-up"
 className='flex justify-center text-6xl sm:text-9xl'>
  <p>Spill the coffee!!</p>
 </div>
 
 
            <div 
            className="pt-[5rem] px-2 text-xl sm:text-2xl sm:text-center sm:mx-[10%] font-hel">
                <p             data-aos="fade-up"
                >UnderBlu is a coastal-inspired coffee cafe that blends creativity with community. We value individuality and collaboration in a relaxed yet lively atmosphere, making it the perfect space for both personal reflection and creative collaboration. 

                    
                </p>
                <br />
                <p             data-aos="fade-up"
                >More than  just a cafe, UnderBlu is a space where artists, entrepreneurs,  and anyone looking for connection can support each other and  grow together.</p>
                <br />
                <div className="div1 overflow-hidden z-10">
                <motion.div
                style={{scale}}
                 className="div2 w-full h-full flex justify-center">
                <img src="./bnwart.jpeg" className="" alt="" />
                 </motion.div>
                </div>

            </div>
            <br />
        </div>
    </div>
  )
}

export default About
