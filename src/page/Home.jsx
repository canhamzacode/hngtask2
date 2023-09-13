import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import Featured from '../components/Featured/Featured'
import Footer from '../components/Footer/Footer'

const Home = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="w-full">
            <Hero search={search} setSearch={setSearch} />
            <Featured search={search} setSearch={setSearch} />
            <Footer />
        </div>
    )
}

export default Home