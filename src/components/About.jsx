import React, { useRef } from 'react'
import { motion, useScroll, useTransform,  } from 'framer-motion';


function About() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({

        target: container,
    
        offset: ['start start', 'end end']
    
      })
    
      const imageScale = useTransform(scrollYProgress, [0, 1], [4, 1])

  return (
    <div className='h-[auto] text-swblue font-ed'
    ref={container}
>
        <div className="pt-[80px]" >
            <div className="about flex sm:text-2xl text-xl justify-center">
            <img src="./part1.png" className='h-[30px]' alt="" />
            <img src="./part2.png" className='h-[30px]' alt="" />
            <p>About</p>
            <img src="./part3.png" className='h-[30px]' alt="" />
            <img src="./part4.png" className='h-[30px]' alt="" />
            </div>
            <p             data-aos="fade-up"
 className='flex justify-center text-7xl sm:text-9xl'>Spill the coffee!!</p>
            <motion.div 
            className="pt-[5rem] px-2 text-xl sm:text-2xl sm:text-center font-ita">
                <p             data-aos="fade-up"
                >UnderBlu is a coastal-inspired coffee cafe that blends creativity with community. We value individuality and collaboration in a relaxed yet lively atmosphere, making it the perfect space for both personal reflection and creative collaboration. 

                    
                </p>
                <br />
                <p             data-aos="fade-up"
                >More than  just a cafe, UnderBlu is a space where artists, entrepreneurs,  and anyone looking for connection can support each other and  grow together.</p>
                <br />
                <div
                    style={{scale: imageScale}}
                 className="flex justify-center">
  <img src="./bnwart.jpeg" className="" alt="" />
</div>
            </motion.div>
            <br />
        </div>
    </div>
  )
}

export default About
