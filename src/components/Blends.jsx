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
    
          title1: "Mid",
    
          title2: "night",
    
          src: "almcol.jpg"
    
        },
    
        {
    
          title1: "Mambo",
    
          title2: "Mambo",
    
          src: "rn.jpeg"
    
        }
    
      ]

  return (
    <div>
      <div className="py-[80px] ">
        <div className="">
        <div className="about flex text-swblue font-ed sm:text-4xl text-2xl justify-center py-[60px]">
            <img src="./part1.png" className='h-[30px]' alt="" />
            <img src="./part2.png" className='h-[30px]' alt="" />
            <p>Our blends</p>
            <img src="./part3.png" className='h-[30px]' alt="" />
            <img src="./part4.png" className='h-[30px]' alt="" />
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
