
import { useFetch } from "../hooks/useFetch";
import { BASE_URL, API_KEY } from "./apiData";

export type MovieProps = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

type PopularMoviesProps = {
    page: number;
    results: MovieProps[];
    total_pages: number;
    total_results: number;
}

export const getPopularMovies = async () => {
    const popularMoviesUrl = BASE_URL + "/discover/movie" + API_KEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=8';

    const data = await useFetch<PopularMoviesProps>(popularMoviesUrl);

    return data;
}
