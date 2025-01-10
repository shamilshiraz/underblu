// import logo7 from '/logo7.svg'
import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Blends from './components/Blends'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Putt from './components/Putt'
import Lenis from '@studio-freight/lenis';
// import Footer from './components/Footer'
import Mos from './components/Mos'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './components/Loading'
import Sw from './components/Sw'



function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); 

  useEffect(() => {
    // Simulate loading by using a timeout, or replace with actual load logic
    setTimeout(() => {
      setFadeOut(true); // Trigger fade-up animation
      setTimeout(() => {
        setIsLoading(false); // Remove loading screen after fade-up completes
      }, 1000); // Match this timeout with the animation duration
    }, 2000); // Adjust this timing as needed
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Adjust the duration to your preference
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function to stop Lenis when the component unmounts
    return () => lenis.destroy();
  }, []);
  return (
    <>
<div>
{
        isLoading?(
         <Loading fadeOut={fadeOut} />
        
        ):(
          <>

<Nav/>
  <Hero/>
  <About/>
  <Putt/>
  <Blends/>
  <Sw/>
  <Mos/>
          </>

        )
      }

</div>
    </>
  )
}

export default App
