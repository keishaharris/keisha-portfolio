import React from "react";
import '../assets/index.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <h1 className="flex justify-between pt-2">
            <div className="pl-6 flex items-center justify-center gap-2 capitalize">
            <div className="flex"> 
                    <div className="peach square"></div>
                    <div className="orange square"></div>
                    <div className="yellow square"></div>
                    <div className="forest square"></div>
                </div>
                <Link to="/"> 
                    <span className="font-semibold font-sans text-lg tracking-wide"> Keisha harris</span>
                    <span className="text-sm font-thin"> developer</span>
                </Link>
                 
                
            </div>
            <nav className="pr-6 flex gap-6">
                <ul className="list-none flex gap-6">
                    <Link to="/about"> <li className="about"> about</li></ Link>
                    <Link to="/skills"> <li className="skills"> skills</li></Link>
                    <Link to="/projects"> <li className="projects"> projects</li></Link>
                    <Link to="/contact"> <li className="contact"> contact</li></Link>
                </ul>
            </nav>
        </h1>
        </>
    )
}

export default Header;