import React from 'react';
import Poster from "../../assets/image/Poster.svg"
import { AiOutlineHeart } from "react-icons/ai"
import { Link } from 'react-router-dom';

const FeaturedCard = ({ movie, genreData }) => {
    const getGenreNameById = (genreId) => {
        const genre = genreData.find((genre) => genre.id === genreId);
        return genre ? genre.name : "Unknown";
    };

    return (
        <div className='w-full relative grid gap-[10px]'>
            <Link to={`/${movie.id}`}>
                <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={`${movie?.title}`} className='w-full h-[370px] object-cover' />
            </Link>
            <div className='w-full absolute flex top-0 left-0 items-center justify-between p-[15px]'>
                <button></button>
                <button>
                    <AiOutlineHeart size={30} className='text-white' />
                </button>
            </div>
            <div className='w-full'>
                <p data-testid="movie-release-date" className='text-[#9CA3AF]'>
                    {`Release Date (UTC): ${new Date(movie.release_date).toUTCString()}`}
                </p>
                <Link to={`/${movie.id}`}>
                    <h3 data-testid="movie-title" className='text-[#111827] text-2xl'>
                        {movie?.original_title}
                    </h3>
                </Link>
            </div>
            <div className='flex gap-[25px] w-full items-center'>
                <div className='bg-[#ff9500] text-black p-[5px]'>
                    IMDB
                </div>
                <p>
                    {movie?.vote_average * 10} / 100
                </p>
                <div>
                    🍅 {movie?.vote_average * 10}%
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