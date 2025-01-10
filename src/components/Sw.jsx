import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

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
    <div className="h-[200vh] align-items-center flex flex-col justify-center">

    <motion.div
      ref={container}
      className="h-[100vh] bg-swblue"
      style={{ opacity:opacity1 }}
      transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
    >
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




