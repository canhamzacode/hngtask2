import React, { useContext, useEffect, useState } from 'react'
import Logo from "../../assets/image/Logo.png"
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { BiSearchAlt2 } from "react-icons/bi"
import { Link, useNavigate } from 'react-router-dom'


const NavBar = () => {
    const [disableScroll, setDisableScroll] = useState(false);
    const [navState, setNavState] = useState(false)
    const toggle = () => {
        setNavState(!navState);
        setDisableScroll(!disableScroll)
    }



    useEffect(() => {
        if (disableScroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [disableScroll]);

    return (
        <div className='w-full flex px-[20px]  md:px-[64px] py-[20px] justify-between items-center'>
            <Link to="/">
                <div className='w-[180px] md:w-[200px] h-[40px] md:h-[60px] '>
                    <img src={Logo} alt="" className='w-full h-full' />
                </div>
            </Link>
            <div className={`  ${navState ? "flex absolute w-full h-full top-0 left-0  z-10 bg-black/80" : ""}`}>
                <div className={`${navState ? "flex flex-col gap-[25px] p-[20px] h-full z-10 " : "hidden"}  md:flex md:gap-[40px] items-center ${navState ? "w-[80%] bg-black/90 absolute top-0 left-0" : "relative"}`} >
                    {navState && (
                        <div className="flex justify-between items-center w-full">
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
                    <div className={`flex items-center ${navState ? "w-full" : "w-[350px]"}  gap-[10px] border border-white rounded-sm`}>
                        <input type="text" placeholder='Search...' className='w-full p-[10px] rounded-md bg-transparent outline-none' />
                        <button>
                            <BiSearchAlt2 size={30} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-[20px]'>
                <p>
                    Login
                </p>
                <div className='flex  cursor-pointer' onClick={toggle}>
                    <AiOutlineMenu size={30} />
                </div>
            </div>
        </div>
    )
}

export default NavBar