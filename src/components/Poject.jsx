import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";




const anim = {

    initial: {width: 0},

    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},

    closed: {width: 0}

}


export default function Poject({project,container}) {
    const[isActive,setIsActive]=useState(false)
    const { title1, title2, src } = project;
    const containerp = useRef(null);
    const isInview = useInView(containerp, { once: false,   margin: "100px 300px -200px 0px" });
    useEffect(() => {
        // Set isActive to true for mobile devices (screen width less than 768px)
        if (window.innerWidth < 768) {
          setIsActive(true);
        }
      }, []);


    return (
        <div
        ref={containerp}
         className='text-swblue   pt-[] pb-[0.8vw] w-full flex justify-center items-center font-ed text-6xl sm:text-8xl'
        onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}}>
            <p className="me-[0.75vw]">{title1}</p>
            <motion.div variants={anim}
  animate={window.innerWidth >= 768 ? (isActive ? "open" : "closed") : (isInview?'open':'closed')}
               className='overflow-hidden'>
                <img className="sm:h-[8vw] h-[10vh]  max-w-[20vw] object-cover" src={`./${src}`}></img>
            </motion.div>
            <p className="ms-[0.75vw]">{title2}</p>
        </div>
    )
}