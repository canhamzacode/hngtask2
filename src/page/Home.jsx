import React from 'react'
import Hero from '../components/Hero/Hero'
import Featured from '../components/Featured/Featured'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <Featured />
            <Footer />
        </div>
    )
}

export default Home