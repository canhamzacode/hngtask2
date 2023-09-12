import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col gap-[10px] px-[20px]  md:px-[64px] py-[20px]'>
            <div className='flex gap-[10px] items-center justify-center flex-wrap'>
                <AiFillFacebook size={30} />
                <AiOutlineInstagram size={30} />
                <AiOutlineTwitter size={30} />
                <AiFillYoutube size={30} />
            </div>
            <div className='flex gap-[10px] items-center justify-center flex-wrap'>
                <Link to="">
                    Conditions of Use
                </Link>
                <Link to="">
                    Privacy & Policy
                </Link>
                <Link to="">
                    Press Room
                </Link>
            </div>
            <div>
                <p className='text-[#6B7280] text-center'>
                    © 2021 MovieBox by Adriana Eka Prayudha
                </p>
            </div>
        </div>
    )
}

export default Footer