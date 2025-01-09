import './Loading.css'
import React from 'react'

function Loading({fadeOut}) {
  return (
    <div className={`video-loader ${fadeOut ? 'fade-up' : ''}`}>
        <video autoPlay muted loop >
            <source src='./loading.mp4' type='video/mp4'/>
             this shit is not working
        </video>

    </div>
  )
}

export default Loading