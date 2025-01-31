import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

function Sw() {
  const container = useRef(null);
  const container2=useRef(null)
  const { scrollYProgress: scrollYprogress1 } = useScroll({
    target: container,
    // offset: ['start start', 'center start'], // From the bottom to the top of the viewport
    offset: [ 'start 10vh','start start'], // From the bottom to the top of the viewport

  });
  const { scrollYProgress: scrollYprogress2 } = useScroll({
    target: container2,
    offset: [ 'start 10vh','start start'], // From the bottom to the top of the viewport

  });

  const opacity1=useTransform(scrollYprogress1,[0,0.2,0.7,0.9,1],[0,0.1,0.5,0.7,1])
  const opacity2=useTransform(scrollYprogress2,[0,1],[1,0])


  return (
    <div className="h-[200vh] align-items-center flex flex-col ">

    <motion.div
      ref={container}
      className="h-[200vh] w-full bg-swblue "
      style={{ opacity:opacity1 }}
      transition={{ duration: 5, ease: 'easeInOut' }} // Smooth transition
    >
        <div className="h-[200vh] w-full pt-[0%] flex flex-col items-center px-3 font-hel justify-center ">
        <svg id="Layer_2" fill='#ffffff' className='h-[10vh]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161.46 78.64">
  <g id="Layer_1-2" data-name="Layer_1">
    <g>
      <path class="cls-1" d="M.04,47.34c1.46.86,2.93,1.75,4.34,2.55,4.08,2.33,8.32,4.13,12.73,5.28,2.85.74,5.72,1.33,8.65.87.51-.08,1.03-.29,1.49-.58.63-.4.95-1.09.92-1.98-.03-.83-.4-1.42-1.01-1.67-1.01-.43-2.05-.77-3.09-1.1-4.91-1.53-9.79-3.19-14.23-6.27C4.14,40.48.89,34.64.17,26.81c-.41-4.46-.11-8.79,1.41-12.91C3.45,8.79,6.75,5.4,10.93,3.13c2.93-1.59,6.02-2.44,9.21-2.81,5.22-.62,10.43-.24,15.64.47,4.05.55,8.86,1.78,12.78,3.1.17.06.29.12.38.22.15.19.14.44.13.5-.02.44-.02,10.77,0,25.02-.48-.25-1.18-.64-1.6-.86-4.9-2.6-9.94-4.66-15.2-5.87-1.79-.41-3.63-.5-5.45-.66-.49-.04-1.01.12-1.48.32-.68.29-1.07.91-1.14,1.8-.08.89.14,1.63.81,2.04.68.42,1.4.78,2.14,1.04,3.71,1.3,7.46,2.45,11.14,3.85,3.26,1.25,6.26,3.18,8.82,5.98,3.07,3.35,4.8,7.53,5.34,12.41.45,4.09.34,8.16-.63,12.13-1.5,6.14-4.78,10.44-9.59,13.13-3.38,1.89-6.97,2.84-10.66,3.31-4.68.61-9.37.52-14.06-.12-5.62-.77-11.7-2.64-16.98-5.17-.16-.07-.27-.15-.36-.27-.15-.21-.13-.45-.13-.51.01-.43.01-10.7,0-24.82Z"/>
      <path class="cls-1" d="M51.79,1.57h22.26c3.98,17.27,7.95,34.55,11.93,51.82.41-.84.88-1.65,1.21-2.52,1.17-3.07,1.96-6.16,2.39-9.27.97-7.01-.69-15.13-1.1-17.24-1.13-5.87-3.01-13.68-6.26-22.76,8.09,0,16.18,0,24.27-.01.93,6.24,1.85,12.47,2.78,18.71,3.18-9.17,5.48-15.81,5.87-17.16.06-.21.24-.88.82-1.41.4-.37.93-.59,1.64-.73,3.85-.78,7.67-1.4,11.61-.69,4.75.86,8.17,3.52,10.67,7.54,2.29,3.68,3.39,7.77,3.92,12,1.45,11.71-.87,22.78-5.94,33.36-3.75,7.83-8.31,15.18-13.29,22.28-.39.56-.75,1.06-1.32,1.33-.48.23-.92.21-1.07.21-1.16-.01-8.8-.03-19.3-.07-1.54-5.53-3.08-11.06-4.62-16.59-.95,4.92-3.21,11.63-8.74,15.58-.77.55-1.38,1-1.58,1-5.85.07-11.7.04-17.48.04-6.22-25.14-12.44-50.27-18.66-75.41ZM116.96,53.52c2.49-4.17,6.39-15.08,6.19-20.32-.07-1.85-.29-3.73-.77-5.51-.73-2.67-2.7-4.05-5.47-4.1-2.31-.04-4.52.38-6.51,1.61,2.2,9.5,4.38,18.87,6.57,28.32Z"/>
      <g>
        <path class="cls-1" d="M143.93,3.13v-1.53h7.14v1.53h-2.61v6.76h-1.92V3.13h-2.61Z"/>
        <path class="cls-1" d="M154.77,1.59l2.04,5.71h.02l1.93-5.71h2.7v8.3h-1.79v-5.88h-.02l-2.14,5.88h-1.48l-2.14-5.82h-.02v5.82h-1.79V1.59h2.7Z"/>
      </g>
    </g>
  </g>
</svg>
            <div class="grid sm:grid-cols-2 grid-cols-1 h-[100vh] mt-[100px] w-full">
  <div class="bg-swblue sm:h-full h-[60vh] my-3 flex justify-center items-center overflow-hidden">
    <img src="./swxblu.png" className=' object-contain h-[100%] ' />
  </div>
  <div class="bg-swblue text-[1.2em] sm:text-4xl sm:h-full h-[60vh] flex justify-center items-center px-4  text-white font-ita tracking-wider leading-loose	" style={{wordSpacing:'0.5em'}}>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis optio quisquam magnam, tempore necessitatibus cupiditate soluta quam autem maiores corporis praesentium ut perspiciatis provident sapiente, id eum quae eveniet ex?
    Id voluptates architecto quibusdam tempora dolorem! Minima voluptas velit dicta eos? Error eligendi fuga molestiae ad. Vel natus iusto illum dolorum temporibus provident hic, in, cum itaque iste repellendus iure!</p>
    
    </div>
</div>

        </div>
    </motion.div>
    {/* <motion.div
    ref={container2}
     className="h-[100vh] bg-swblue"
     style={{opacity:opacity2}}
    >

    </motion.div> */}
    </div>

  );
}

export default Sw;

