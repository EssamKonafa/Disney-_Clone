import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/api/GetMovies";
import CarouselMoviesBanner from "@/components/CarouselMoviesBanner";
import MoviesCarousel from "@/components/MoviesCarousel";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (

    <>

      <div>

        <CarouselMoviesBanner/>

        <MoviesCarousel movies={upcomingMovies} title='Upcoming' isVertical/>
        <MoviesCarousel movies={topRatedMovies} title='Top Rated'/>
        <MoviesCarousel movies={popularMovies} title='Popular Movies'/>
      </div>

    </>
    
  );
}
