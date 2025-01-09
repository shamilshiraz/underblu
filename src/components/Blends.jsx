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
      <div className="py-[80px] ">
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
      </div>
    </div>
  )
}

export default Blends
