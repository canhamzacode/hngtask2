import React, { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai"
import { Link } from 'react-router-dom';

const FeaturedCard = ({ movie, genreData }) => {
    const [isClicked, setIsClicked] = useState(false);

    const getGenreNameById = (genreId) => {
        const genre = genreData.find((genre) => genre.id === genreId);
        return genre ? genre.name : "Unknown";
    };

    const heart = () => {
        setIsClicked(!isClicked);
    }

    const buttonStyle = {
        backgroundColor: isClicked ? 'red' : 'transparent',
        borderRadius: "50%"
    };

    return (
        <div data-testid="movie-card" className='w-full relative grid gap-[10px] '>
            <Link to={`/movies/${movie.id}`}>
                <div className='w-full'>
                    <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={`${movie?.title}`} className='w-full h-[370px] object-cover' />
                </div>
            </Link>
            <div className='w-full absolute flex top-0 left-0 items-center justify-between p-[15px]'>
                <button></button>
                <button>
                    <AiOutlineHeart
                        size={30}
                        className='text-white'
                        onClick={heart}
                        style={buttonStyle}
                    />
                </button>
            </div>
            <div className='w-full'>
                <Link to={`/movies/${movie.id}`}>
                    <h3 data-testid="movie-title" className='text-[#111827] text-2xl'>
                        {movie?.original_title}
                    </h3>
                </Link>
                <p data-testid="movie-release-date" className='text-[#9CA3AF]'>
                    {movie?.release_date ? `${new Date(movie?.release_date).toISOString().split('T')[0]}` : 'Release Date: N/A'}
                </p>
            </div>
            <div className='flex gap-[25px] w-full items-center'>
                <div className='bg-[#ff9500] text-black p-[5px]'>
                    IMDB
                </div>
                <p>
                    {`${(movie?.vote_average * 1000 / 100).toFixed(0)} / 100`}
                </p>
                <div>
                    {`🍅 ${(movie?.vote_average * 10).toFixed(2)}%`}
                </div>
            </div>
            <p className='text-[#9CA3AF]'>
                {movie?.genre_ids?.map((genreId) => (
                    <span key={genreId}>{getGenreNameById(genreId)} </span>
                ))}
            </p>
        </div>
    );
};

export default FeaturedCard;