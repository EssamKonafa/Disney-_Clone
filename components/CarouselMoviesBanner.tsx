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
        <div className='mt-28  mb-5 border'>
            <CarouselMovieWrapper movies={movies}/>
        </div>
    )
}

export default CarouselMoviesBanner