import React from 'react'
import './Banner.css'

function Banner( { variable_small , variable_responsive } ) {

  return (
    <div className={ variable_responsive ? 'variable-responsive-banner' : 'banner' } >
        
        <section className={ variable_small ? 'responsive-contents' : "contents" }>

            <h1 className={ variable_small ? 'responsive-movie-title' : 'movie-title' } >Movie Title</h1>
            <div >

                <button className={ variable_small ? 'responsive-buttons' : 'buttons' } >My List</button>
                <button className={ variable_small ? 'responsive-buttons' : 'buttons' } >Play</button>

            </div>
            <h1 className={ variable_small ? 'responsive-description' : 'description' }>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</h1>
            
        </section>
        <section className="fade-bottom"></section>

    </div>
  )
}

export default Banner

