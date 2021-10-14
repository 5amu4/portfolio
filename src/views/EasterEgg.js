import React from "react"
import { Link } from 'react-router-dom';
import TopNav from '../components/sections/TopNav';
import Footer from "../components/layout/Footer";

const EasterEgg = () => {
    return (
        <div class="easter-egg-avocado">
            <TopNav />
            
            <div class="onepiece">
                <iframe width="477" height="555" src="https://www.youtube.com/embed/-R4rv2OisQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
                <batman>
                </batman>
                <Footer/>
        </div>
        
    ); 
}; 


export default EasterEgg;