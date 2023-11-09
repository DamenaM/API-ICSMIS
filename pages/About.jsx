import React from "react"
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"


export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-cta">
                <h2>Accesses only authorized person  </h2>
                <Link
                 className="link-button"
                  to="/Graduats">Explore our Graduate list</Link>
            </div>
            
           
        </div>
        
    );
}