import React, { useEffect } from 'react'
import movieApi from '../common/apis/movieApi'
import { APIKey } from '../common/apis/MovieApiKey'
import MovieListing from './MovieListing'
import { addMovies } from '../features/movies/movieSlice'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchMovies = async() => {
      const response = await movieApi.get(`movie?api_key=${APIKey}`);
      dispatch(addMovies(response.data.results));
    }
    fetchMovies()
  }, [])

  return (
    <>
      <div className='banner-img'>Home</div>
      <MovieListing />
    </>
  )
}

export default Home