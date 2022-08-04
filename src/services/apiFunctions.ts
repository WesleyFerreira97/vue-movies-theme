
import { useFetch } from "../hooks/useFetch";

export const getPopularMovies = async () => {
    const data = await useFetch("https://swapi.dev/api/")
    return data;
}
