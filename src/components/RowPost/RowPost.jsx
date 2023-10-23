import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import './RowPost.css'
import { imageURL } from '../../Constants/Constants'

function RowPost( props ) {

  const { url , variable_small , title , isOriginal } = props
  const [ movies , setMovies ] = useState( [] )

  useEffect( () => {

    axios.get( url ).then( response => {

      console.log(response.data.results);
      setMovies( response.data.results )

    } ).catch( error => {

      alert('Network Error')

    } )

  } , [] )

  return (
    <div className='row-post' >
        
        <h2 className={ variable_small ? "category-title" :  "category-title" }>{ title }</h2>
        <div className="posters">

            <div className={ variable_small ? 'responsive-upper-fade' : "upper-fade" }></div>
    
            {

              movies.map( ( movies_obj ) => 
              
                <img className={ variable_small ? 'small-poster' : isOriginal ? 'original-poster' : 'poster' } src={ `${ imageURL + movies_obj.poster_path }` } alt="Posters" />
              
              )

            }

            <div className={ variable_small ? 'responsive-lower-fade' : isOriginal ? 'original-lower-fade' : "lower-fade" }></div>

        </div>

    </div>
  )
}

export default RowPost