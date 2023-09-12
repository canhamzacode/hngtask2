import React, { useState } from 'react';
import Logo from "../../src/assets/image/Logo.png";
import Video from "../../src/assets/image/video.svg";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { BiCameraMovie, BiLogOut } from "react-icons/bi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BsCalendarWeek } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SpecificData = () => {
    const [navState, setNavState] = useState(false);

    const toggle = () => {
        setNavState(!navState);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-[0.3fr,1fr] w-full h-[100vh] '>
            <div className={` ${navState ? "bg-[#c6c3c3] flex flex-col gap-[30px]" : "hidden"} md:flex md:flex-col gap-[25px] p-[20px] h-full w-[80%] md:w-[100%] overflow-y-auto  absolute top-0 left-0 md:relative z-10`}>
                <div className='w-full p-[10px] bg-black hidden md:flex'>
                    <div className='w-[100%]'>
                        <img src={Logo} alt="" className='w-full h-full' />
                    </div>
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
                    <div className='px-[15px] py-[20px] w-full bg-white border-r-black border-[2px] flex gap-[20px] items-center justify-center md:justify-start '>
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
                <div className='w-full h-[500px] bg-red-400'>
                    <img src={Video} alt="" className='w-full h-full' />
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-[15px] flex-wrap '>
                        <p>
                            Top Gun: Maverick
                        </p>
                        <p>
                            2022
                        </p>
                        <p>
                            PG-13
                        </p>
                        <p>
                            2h 10m
                        </p>
                        <div className=' flex items-center gap-[15px]'>
                            <button className='text-[#BE123C] p-[5px] bg-slate-100 rounded '>Action</button>
                            <button className='text-[#BE123C] p-[5px] bg-slate-100 rounded'>Drama</button>
                        </div>
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <p>
                            ⭐
                        </p>
                        <p>
                            8.85 <span className='text-gray-300'>| 350k</span>
                        </p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-[1fr,0.4fr] gap-[20px] '>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[20px]'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ducimus rerum quia! Tempora quis dolorum totam! Asperiores fuga repellendus voluptate sit harum dolore impedit, inventore provident vero suscipit eius tempora.
                            </p>
                            <p>
                                Director : <span className='text-[#BE123C]'>Joseph Kosinic</span>
                            </p>
                            <p>
                                Writers : <span className='text-[#BE123C]'>Joseph Kosinic</span>
                            </p>
                            <p>
                                Stars : <span className='text-[#BE123C]'>Joseph Kosinic</span>
                            </p>
                        </div>
                        <div className='w-full'>
                            <button className='w-full p-[15px] bg-[#BE123C] rounded-lg'>See Showtimes</button>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-[15px]'>
                        <button className='w-full p-[15px] bg-[#BE123C] rounded-lg'>See Showtimes</button>
                        <button className='w-full p-[15px] bg-[#BE123C] rounded-lg'>More Watch Options</button>
                        <div className='w-full grid grid-cols-3 gap-2'>
                            <div className='h-[200px] bg-black'></div>
                            <div className='h-[200px] bg-black'></div>
                            <div className='h-[200px] bg-black'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificData;