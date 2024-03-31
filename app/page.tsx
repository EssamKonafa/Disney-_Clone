import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/api/GetMovies";
import MoviesCarousel from "@/components/MoviesCarousel";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (

    <div>

      <div>
        <MoviesCarousel movies={upcomingMovies} title='upcoming' isVertical/>
        <MoviesCarousel movies={topRatedMovies} title='top Rated'/>
        <MoviesCarousel movies={popularMovies} title='popular movies'/>
      </div>

    </div>
    
  );
}
