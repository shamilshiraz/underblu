// import logo7 from '/logo7.svg'
import { useEffect } from 'react'
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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust the duration to your preference
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
  <Nav/>
  <Hero/>
  <About/>
  <Putt/>
  <Blends/>
  <Mos/>
</div>
    </>
  )
}

export default App
