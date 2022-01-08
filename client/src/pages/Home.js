import React from 'react'
import { Navigate } from 'react-router-dom'
const Home = () => {
    if(!window.auth){
        return <Navigate to ="/login"/>
    }
    return (
        <div>
            <h1>true</h1>
        </div>
    )
}

export default Home;
