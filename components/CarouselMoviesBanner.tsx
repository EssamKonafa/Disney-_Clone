import { getDiscoverMovies } from '@/api/GetMovies'
import React from 'react'
import CarouselMovieWrapper from './CarouselMovieWrapper'

    // type Props={
    //     id:string;
    //     keywords?:string;
    // }

// async function CarouselMoviesBanner({id,keywords}:Props) {
async function CarouselMoviesBanner() {
    const movies = await getDiscoverMovies()
    // const movies = await getDiscoverMovies(id,keywords)

    return (
        <div className=''>
            <CarouselMovieWrapper movies={movies}/>
        </div>
    )
}

export default CarouselMoviesBanner