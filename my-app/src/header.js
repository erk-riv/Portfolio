import React from "react";
import './index.css'
export const Header = () => {
    return (
        <div className="h-location">
            <h1 className="header-name">erick rivera</h1>
            <p className="header-links">
                <a href="https://github.com/erk-riv" className="h-spacer">github</a>
                <a href="https://www.linkedin.com/in/erick-riv/" className="h-spacer">linkedIn</a>
                <a href="https://dl.dropboxusercontent.com/s/6tzxekz0sn48gm5/Resume%20Erick%20Rivera.pdf?dl=0" className="h-spacer">resume</a>
            </p>
        </div>
    )
}