import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import Putt from './Putt';

function Sw() {
  const container = useRef(null);
  const container2=useRef(null)
  const { scrollYProgress: scrollYprogress1 } = useScroll({
    target: container,
    // offset: ['start start', 'center start'], // From the bottom to the top of the viewport
    offset: [ '90vh end','start start'], // From the bottom to the top of the viewport

  });
  const { scrollYProgress: scrollYprogress2 } = useScroll({
    target: container2,
    offset: [ 'start 10vh','start start'], // From the bottom to the top of the viewport

  });

  const opacity1=useTransform(scrollYprogress1,[0,1],[0,1])
  const opacity2=useTransform(scrollYprogress2,[0,1],[1,0])


  return (
    <div className="h-[300vh] align-items-center flex flex-col ">

    <motion.div
      ref={container}
      className="h-[200vh] w-full bg-swblue "
      style={{ opacity:opacity1 }}
      transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
    >
        <div className="h-[200vh] w-full pt-[30%] flex flex-col items-center px-3 font-hel justify-center ">
            <img src="./swlogo.png" className='h-[100px] w-[150px]' alt="" />
            <div class="grid sm:grid-cols-2 grid-cols-1 h-[100vh] mt-[100px] w-full">
  <div class="bg-swblue sm:h-full h-[60vh] my-3 flex justify-center items-center overflow-hidden">
    <img src="./ubluxsw.png" className=' object-contain h-[100%] ' />
  </div>
  <div class="bg-swblue text-[1.2em] sm:text-4xl sm:h-full h-[60vh] flex justify-center items-center px-4  text-white font-hel">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis optio quisquam magnam, tempore necessitatibus cupiditate soluta quam autem maiores corporis praesentium ut perspiciatis provident sapiente, id eum quae eveniet ex?
    Id voluptates architecto quibusdam tempora dolorem! Minima voluptas velit dicta eos? Error eligendi fuga molestiae ad. Vel natus iusto illum dolorum temporibus provident hic, in, cum itaque iste repellendus iure!</p>
    
    </div>
</div>

        </div>
    </motion.div>
    <motion.div
    ref={container2}
     className="h-[100vh] bg-swblue"
     style={{opacity:opacity2}}
    ></motion.div>
    </div>

  );
}

export default Sw;

