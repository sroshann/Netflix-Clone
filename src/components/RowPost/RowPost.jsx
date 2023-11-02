import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import './RowPost.css'
import { imageURL, API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {

  const { url, variable_small, title, isOriginal } = props

  const [movies, setMovies] = useState([])
  const [trailer, setTrailers] = useState([])

  useEffect(() => {

    axios.get(url).then(response => {

      // console.log(response.data.results);
      setMovies(response.data.results)

    }).catch(error => {

      alert('Network Error')

    })

  }, [])

  const opts = {
    height: '250',
    width: '420',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const small_opts = {
    height: '150',
    width: '250',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const playTrailers = (movie_id) => {

    axios.get(`movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {

      console.log( response.data )
      if (response.data.results.length !== 0) setTrailers(response.data.results)
      else alert('Video not found')

    }).catch(error => {

      alert(error.response.data.status_message)

    })

  }

  return (
    <div className='row-post' >

      <h2 className={variable_small ? "category-title" : "category-title"}>{title}</h2>
      <div className="posters">

        <div className={variable_small ? 'responsive-upper-fade' : "upper-fade"}></div>

        {

          movies.map((movies_obj) =>

            <img onClick={() => playTrailers(movies_obj.id)} className={variable_small ? 'small-poster' : isOriginal ? 'original-poster' : 'poster'} src={`${imageURL + movies_obj.poster_path}`} alt="Posters" />

          )

        }

        <div className={variable_small ? 'responsive-lower-fade' : isOriginal ? 'original-lower-fade' : "lower-fade"}></div>

      </div>

      <div id="play-yt-videos">

        {trailer && trailer.map((trailer_obj) =>

          <YouTube id='yt-videos' opts={variable_small ? small_opts : opts} videoId={trailer_obj.key} />

        )}

      </div>

    </div>
  )
}

export default RowPost