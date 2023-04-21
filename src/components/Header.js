import React from "react";

import '../assets/index.css';

const Header = () => {
    return (
        <>
        <h1 className="flex justify-between pt-2">
            <div className="pl-6 flex items-center gap-2 font-bold uppercase">
                 Keisha harris
                <div className="flex"> 
                    <div className="peach square"></div>
                    <div className="orange square"></div>
                    <div className="yellow square"></div>
                    <div className="forest square"></div>
                </div>
            </div>
            <nav className="pr-6 flex gap-6">
                <ul className="list-none flex gap-3">
                    <a href="/#about"> <li className="about"> about</li></a>
                    <a href="/#skills"> <li className="skills"> skills</li></a>
                    <a href="/#projects"> <li className="projects"> projects</li></a>
                    <a href="/#contact"> <li className="contact"> contact</li></a>
                </ul>
            </nav>
        </h1>
        </>
    )
}

export default Header;