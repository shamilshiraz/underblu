import './Loading.css'
import React from 'react'

function Loading({fadeOut}) {
  return (
    <div className={`video-loader ${fadeOut ? 'fade-up' : ''} `}>
        <video autoPlay muted loop className='h-[200px]' >
            <source src='./loading.webm' type='video/webm'/>
             this shit is not working
        </video>
    </div>
  )
}

export default Loading