import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useGetTopData } from '../../hooks/useFetchData';

const Hero = ({ search, setSearch }) => {
    const [randomData, setRandomData] = useState({});
    const { data: topData, refetchData: refetchTopData, error: topError, isLoading: topLoading } = useGetTopData();

    useEffect(() => {
        // Function to fetch random data
        const fetchRandomData = async () => {
            try {
                if (topData && topData.results && topData.results.length > 0) {
                    // Get a random index within the results array
                    const randomIndex = Math.floor(Math.random() * topData.results.length);
                    // Get the random movie data
                    const randomMovie = topData.results[randomIndex];
                    setRandomData(randomMovie);
                }
            } catch (error) {
                console.error('Error fetching random data:', error);
            }
        };

        fetchRandomData();
    }, [topData]);

    return (
        <div className='w-full h-[90vh] relative  text-white'>
            {/* Background Image */}
            <div
                className='absolute inset-0'
                style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/w500${randomData?.backdrop_path}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1, // Send it to the background
                }}
            ></div>
            {/* Black Overlay */}
            <div className='absolute inset-0 bg-black opacity-50'></div>
            {/* Content */}
            <NavBar search={search} setSearch={setSearch} />
            <div className='px-[20px] md:px-[64px] py-[60px] w-full max-w-[700px] grid gap-[25px] relative z-10'>
                <h1 className='text-4xl'>{randomData?.title}</h1>
                <div className='flex gap-[25px] w-full md:w-[60%] items-center'>
                    <div className='bg-[#ff9500] text-black p-[10px]'>
                        IMDB
                    </div>
                    <p>
                        {randomData?.vote_average * 10}/100
                    </p>
                    <div>
                        🍅 {randomData?.vote_average * 10}%
                    </div>
                </div>
                <div className='w-full'>
                    <p className='text-xl'>
                        {randomData?.overview}
                    </p>
                </div>
                <button className='flex bg-[#BE123C] gap-[15px] items-center p-[15px] w-full max-w-[200px] rounded justify-center '>
                    <AiFillPlayCircle size={30} />
                    Watch Trailer
                </button>
            </div>
        </div>
    );
};

export default Hero;