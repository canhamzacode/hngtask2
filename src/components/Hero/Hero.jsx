import React, { useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import { AiFillPlayCircle } from "react-icons/ai"

const Hero = ({ search, setSearch }) => {
    useEffect(() => {
        console.log(search);
    }, [search])

    return (
        <div className='w-full h-[90vh] bg-black text-white overflow-x-hidden bg-cover bg-center ' style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp1867321.jpg')" }} >
            <NavBar search={search} setSearch={setSearch} />
            <div className='px-[20px]  md:px-[64px] py-[60px] w-full max-w-[700px] grid gap-[25px]'>
                <h1 className='text-4xl'>Joh Wick 3: Parabellum</h1>
                <div className='flex gap-[25px]  w-full md:w-[60%] items-center'>
                    <div className='bg-[#ff9500] text-black p-[10px]'>
                        IMDB
                    </div>
                    <p>
                        86.0/100
                    </p>
                    <div>
                        🍅 97%
                    </div>
                </div>
                <div className='w-full'>
                    <p className='text-xl'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aliquid numquam enim dolorem ipsa voluptatibus! Hic iste voluptatem beatae architecto sunt quam, tenetur rerum dolorum eos? Cum incidunt magni placeat!
                    </p>
                </div>
                <button className='flex bg-[#BE123C] gap-[15px] items-center p-[15px] w-full max-w-[200px] rounded justify-center '>
                    <AiFillPlayCircle size={30} />
                    Watch Triller
                </button>
            </div>
        </div>
    )
}

export default Hero