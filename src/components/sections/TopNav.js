import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <>
            <div className="top-nav">
                <Link to="/portfolio">Home</Link>
                <Link to="/portfolio/about-us">About</Link>
                <Link to="/portfolio/contact">Contact</Link>
                <Link to="/portfolio/faq">FAQ</Link>
                <Link to="/portfolio/support">Support</Link>
                <Link to= "/portfolio/easter-egg">Surprise </Link>
            </div>
        </>
    )
}

export default TopNav;