import { SearchResults } from "@/typings";
async function fetchFromTMDB(url: URL, cacheTime?: number) {

    // url.searchParams.set("include_adult", "false");
    // url.searchParams.set("include_video", "false");
    // url.searchParams.set("sort_by", "popularity.desc");
    // url.searchParams.set("language", "en-US");
    // url.searchParams.set("page", "1");

    const request: RequestInit = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        },
        next: {
            revalidate: cacheTime || 60 * 60 * 24
        },
    }

    const response = await fetch(url.toString(), request)
    const data = await response.json()
    console.log(data);
    return data;
}

export async function getDiscoverMovies() {
    const url = new URL(`https://api.themoviedb.org/3/discover/movie`)
    const data = await fetchFromTMDB(url)
    return data.results
}

export async function getSearchedMovies() {
    const url = new URL("https://api.themoviedb.org/3/search/movie");

    const request: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
        next: {
            revalidate: 60 * 60 * 24,
        },
    };

    const response = await fetch(url.toString(), request);
    const data = await response.json()
    return data.results;
}

export async function getUpcomingMovies(){
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
    const data = await fetchFromTMDB(url)
    console.log(data);
    return data.results
}

export async function getTopRatedMovies(){
    const url = new URL('https://api.themoviedb.org/3/movie/top_rated')
    const data = await fetchFromTMDB(url)
    return data.results
}

export async function getPopularMovies(){
    const url = new URL('https://api.themoviedb.org/3/movie/popular')
    const data= await fetchFromTMDB(url)
    return data.results
}