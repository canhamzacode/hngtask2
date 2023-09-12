import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"
import FeaturedCard from './FeaturedCard'
import { useGetTopData } from '../../hooks/useFetchData'
import { Link } from 'react-router-dom'

const Featured = () => {
    const { data, refetchData, error, isLoading } = useGetTopData()
    const [myMovies, setMyMovies] = useState([]);
    const [genreData, setGenreData] = useState([
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ])


    useEffect(() => {
        if (data) {
            // Splice the first 10 results from data and set them in myMovies state
            const first10Movies = data.results.slice(0, 10);
            setMyMovies(first10Movies);
            console.log(myMovies);
        }
    }, [data])

    const getGenreNameById = (genreId) => {
        const genre = genreData.find((genre) => genre.id === genreId);
        return genre ? genre.name : "Unknown";
    };
    return (
        <div className='w-full px-[20px]  md:px-[64px] bg-white my-[40px] grid gap-[40px]'>
            <div className='flex items-center justify-between '>
                <p className='text-3xl'>
                    Featured Movie
                </p>
                <button className='flex gap-2 items-center bg-transparent outline-none border-none text-[#be123c]'>
                    See More
                    <MdKeyboardArrowRight />
                </button>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-[40px] '>
                {isLoading ? "Loading..." : ""}
                {myMovies?.map((movie, id) => (
                    <FeaturedCard
                        key={id}
                        movie={movie}
                        genreData={genreData}
                    />
                ))}

            </div>
        </div >
    )
}

export default Featured