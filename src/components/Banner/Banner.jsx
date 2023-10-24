import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import { API_KEY , imageURL } from '../../Constants/Constants'

function Banner( { variable_small , variable_responsive } ) {

  const [ movie , setMovie ] = useState()

  useEffect( () => {

    axios.get( `trending/all/week?api_key=${ API_KEY }&language=en-US` ).then( ( response ) => {

      // console.log( response.data.results )
      let random = Math.floor(Math.random() * 20);
      setMovie( response.data.results[ random ] )

    } )

  } , [] )

  let movie_name //In this API some movies title is stored in movie title some others are stored in original name

  if ( movie != null ) {

    if ( movie.title != null ) movie_name = movie.title
    else movie_name = movie.original_name

  }

  return (

    <div className={ variable_responsive  ? 'variable-responsive-banner' : variable_small ? 'variable-responsive-banner' : 'banner' } 
      style={ { backgroundImage : `url( ${ movie ? imageURL + movie.backdrop_path : "" }  )` } }>
        
        <section className={ variable_small ? 'responsive-contents' : "contents" }>

            <h1 className={ variable_small ? 'responsive-movie-title' : 'movie-title' } >{ movie_name }</h1>
            <div >

                <button className={ variable_small ? 'responsive-buttons' : 'buttons' } >My List</button>
                <button className={ variable_small ? 'responsive-buttons' : 'buttons' } >Play</button>

            </div>
            <h1 className={ variable_small ? 'responsive-description' : 'description' }>{ movie ? movie.overview : "" }</h1>
            
        </section>
        <section className={ variable_small ? 'responsive-fade-bottom' : "fade-bottom" }></section>

    </div>
  )
}

export default Banner

