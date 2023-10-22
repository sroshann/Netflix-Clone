import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner' >
        
        <section className="contents">

            <h1 className='movie-title' >Movie Title</h1>
            <div className='buttons' >

                <button>Play</button>
                <button>My List</button>

            </div>
            <h1 className="description">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</h1>
            
        </section>
        <section className="fade-bottom"></section>

    </div>
  )
}

export default Banner