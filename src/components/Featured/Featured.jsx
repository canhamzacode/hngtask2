import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import FeaturedCard from './FeaturedCard';
import { useGetTopData, useSearch } from '../../hooks/useFetchData';
import { Link } from 'react-router-dom';

const Featured = ({ search }) => {
    const { data: topData, refetchData: refetchTopData, error: topError, isLoading: topLoading } = useGetTopData();
    const { data: searchData, refetchData: refetchSearchData, error: searchError, isLoading: searchLoading } = useSearch(search);

    const [myMovies, setMyMovies] = useState([]);
    const genreData = [
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
    ]

    useEffect(() => {
        console.log(searchData);
        if (search && searchData) {
            // Update myMovies with search results when there is a search query
            setMyMovies(searchData.results);
        } else if (topData) {
            // Update myMovies with top data when there is no search query
            const first10Movies = topData.results?.slice(0, 10);
            setMyMovies(first10Movies);
        }
    }, [topData, searchData, search]);

    const refetchData = () => {
        if (search) {
            refetchSearchData();
        } else {
            refetchTopData();
        }
    };

    return (
        <div className="w-full px-[20px] md:px-[64px] bg-white my-[40px] grid gap-[40px]">
            <div className="flex items-center justify-between flex-wrap gap-[20px]">
                <p className="text-3xl">
                    {search ? `Search Result for: ${search}` : 'Featured Movies'}
                </p>
                <button className="flex gap-2 items-center bg-transparent outline-none border-none text-[#be123c]" onClick={refetchData}>
                    See More <MdKeyboardArrowRight />
                </button>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-[40px]">
                {searchLoading || topLoading ? 'Loading...' : ''}
                {searchError || topError ? (searchError || topError).message : ''}

                {myMovies?.map((movie, id) => (
                    <div key={id} className="relative">
                        <FeaturedCard movie={movie} genreData={genreData} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Featured;