import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetTopData = () => {
    const { data,
        isLoading,
        error,
        refetch
    } = useQuery(["movie"], async () => {
        return await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`).then((res) => res.data)
    })
    const refetchData = () => {
        alert("Data Refetched")
        refetch()
    }
    return { data, refetchData, error, isLoading }
}

export const useGetSpecificMovie = (id) => {
    const { data,
        isLoading,
        error,
        refetch
    } = useQuery(["movie"], async () => {
        return await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`).then((res) => res.data)
    })
    const refetchData = () => {
        alert("Data Refetched")
        refetch()
    }
    return { data, refetchData, error, isLoading }
}
export const useGetGenere = () => {
    const { data,
        isLoading,
        error,
        refetch
    } = useQuery(["movie"], async () => {
        return await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`).then((res) => res.data)
    })
    const refetchData = () => {
        alert("Data Refetched")
        refetch()
    }
    return { data, refetchData, error, isLoading }
}