import React from 'react'
import Poject from './Poject'



function Blends() {

    const projects = [

        {
    
          title1: "Cold",
    
          title2: "Brew",
    
          src: "nnn.jpeg"
    
        },
    
        {
    
          title1: "Esp",
    
          title2: "resso",
    
          src: "mdinfi.jpg"
    
        },
    
        {
    
          title1: "Pour",
    
          title2: "Over",
    
          src: "cbrew.jpg"
    
        },
    
        {
    
          title1: "Super",
    
          title2: "sonic",
    
          src: "almcol.jpg"
    
        },
    
        {
    
          title1: "Home",
    
          title2: "grown",
    
          src: "rn.jpeg"
    
        }
    
      ]

  return (
    <div>
      <div className="py-[80px] flex flex-col justify-center items-center ">
        <div className="">
          
        <div className="about flex text-swblue font-ed sm:text-4xl text-2xl justify-center py-[60px]">
            <p>Our blends</p>
            </div>
        {

projects.map( project => {

  return <Poject project={project}/>

})

}
        </div>
        <div className=" w-[200px] h-[50px]   overflow-hidden mt-[100px]">
        <video autoPlay muted loop className='object-cover w-full h-full mt-[0px]'>
            <source src='./mot.webm' type='video/webm'/>
             this shit is not working
        </video>
      </div>
      </div>
    </div>
  )
}

export default Blends
