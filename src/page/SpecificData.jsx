import React, { useEffect, useState } from 'react';
import Logo from "../../src/assets/image/Logo.png";
import Video from "../../src/assets/image/video.svg";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { BiCameraMovie, BiLogOut } from "react-icons/bi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BsCalendarWeek } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { useGetSpecificMovie } from '../hooks/useFetchData';

const SpecificData = () => {
    const [navState, setNavState] = useState(false);
    let { id } = useParams();
    const { data, refetchData, error, isLoading } = useGetSpecificMovie(id)
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

    const getGenreNameById = (genreId) => {
        const genre = genreData.find((genre) => genre.id === genreId);
        return genre ? genre.name : "Unknown";
    };

    function formatVoteCount(voteCount) {
        if (typeof voteCount !== 'number') {
            return 'N/A'; // Handle non-numeric or undefined values
        }

        if (voteCount >= 1000 && voteCount < 1000000) {
            return `${(voteCount / 1000).toFixed(1)}k`;
        } else if (voteCount >= 1000000) {
            return `${(voteCount / 1000000).toFixed(1)}M`;
        }

        return voteCount.toString();
    }

    useEffect(() => {
        console.log(data);
    }, [data])

    const toggle = () => {
        setNavState(!navState);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-[0.3fr,1fr] w-full h-[100vh] '>
            <div className={` ${navState ? "bg-[#c6c3c3] flex flex-col gap-[30px]" : "hidden"} md:flex md:flex-col gap-[25px] p-[20px] h-full w-[80%] md:w-[100%] overflow-y-auto  absolute top-0 left-0 md:relative z-10`}>
                <div className='w-full p-[10px] bg-black hidden md:flex rounded-lg'>
                    <Link to="/">
                        <div className='w-[100%]'>
                            <img src={Logo} alt="" className='w-full h-full' />
                        </div>
                    </Link>
                </div>
                {navState && (
                    <div className="flex justify-between items-center w-full md:hidden ">
                        <Link to="/">
                            <div className='w-[180px] md:w-[200px] h-[40px] md:h-[60px]'>
                                <img src={Logo} alt="logo" className='w-full h-full' />
                            </div>
                        </Link>
                        <div className='flex cursor-pointer' onClick={toggle}>
                            <AiOutlineClose size={30} />
                        </div>
                    </div>
                )}
                <div className='grid'>
                    <div className='px-[15px] py-[20px] w-full bg-white border-r-black border-[2px] flex gap-[20px] items-center justify-center md:justify-start '>
                        <AiOutlineHome size={30} />
                        <p>
                            Home
                        </p>
                    </div>
                    <div className='px-[15px] py-[20px] w-full bg-white border-r-[#BE123C] border-[3px] flex gap-[20px] items-center justify-center md:justify-start '>
                        <BiCameraMovie size={30} />
                        <p>
                            Movies
                        </p>
                    </div>
                    <div className='px-[15px] py-[20px] w-full bg-white border-r-black border-[2px] flex gap-[20px] items-center justify-center md:justify-start '>
                        <PiTelevisionSimpleBold size={30} />
                        <p>
                            Tv Series
                        </p>
                    </div>
                    <div className='px-[15px] py-[20px] w-full bg-white border-r-black border-[2px] flex gap-[20px] items-center justify-center md:justify-start '>
                        <BsCalendarWeek size={30} />
                        <p>
                            Up Coming
                        </p>
                    </div>
                </div>
                <div className=' w-full '>
                    <div className='w-full rounded-md border p-[10px] md:p-[15px] flex flex-col gap-[15px]'>
                        <h3 className='text-[#333333] text-xl'>
                            Play movie quizzes and earn free tickets
                        </h3>
                        <p className='text-[#666666]'>
                            50k people are playing now
                        </p>
                        <button className='w-[80%] mx-auto bg-rose-50 p-[10px]'>
                            Start playing
                        </button>
                    </div>
                </div>
                <div className='p-[20px] w-full flex items-center mb-[15px] justify-center'>
                    <BiLogOut size={30} /><p>Log Out</p>
                </div>
            </div>
            <div className='w-full p-[20px] h-[100vh] flex flex-col gap-[20px] overflow-x-auto'>
                <div className='flex md:hidden items-center'>
                    <FaBars size={30} onClick={toggle} />
                </div>
                <div className='w-full bg-red-400 rounded-2xl'>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
                        alt=""
                        className='w-full h-[400px] object-cover rounded-md'
                    />
                </div>
                <div className='w-full flex items-center gap-x-[15px] gap-y-[10px] justify-between flex-wrap'>
                    <div className='flex items-center gap-x-[15px] gap-y-[10px] flex-wrap '>
                        <p data-testid="movie-title">
                            {data?.original_title}
                        </p>
                        <p data-testid="movie-release-date">
                            {data?.release_date}
                        </p>
                        <p>
                            PG-13
                        </p>
                        <p data-testid="movie-runtime">
                            {data?.runtime}
                        </p>
                        <div className='flex items-center gap-[15px]'>
                            {data?.genres?.map((genreId, index) => (
                                <button key={index} className='text-[#BE123C] p-[5px] bg-slate-100 rounded '>
                                    {genreId.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <p>
                            ⭐
                        </p>
                        <p>
                            {data?.vote_average} <span className='text-gray-300'>| {formatVoteCount(data?.vote_count)}</span>
                        </p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-[1fr,0.4fr] gap-[20px] '>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[20px]'>
                            <p data-testid="movie-overview">
                                {data?.overview}
                            </p>
                            {/* Additional movie details (director, writers, stars) can be added here if needed */}
                        </div>
                        <div className='w-full flex gap-[15px] items-center'>
                            Production Countries:
                            {data?.production_countries?.map((genreId, index) => (
                                <button key={index} className='text-[#BE123C] p-[5px] bg-slate-100 rounded '>
                                    {genreId.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-[15px]'>
                        <button className='w-full p-[15px] bg-[#BE123C] rounded-lg text-white'>
                            See Showtimes
                        </button>
                        <button className='w-full p-[15px] bg-[#BE123C] rounded-lg text-white'>
                            More Watch Options
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SpecificData;