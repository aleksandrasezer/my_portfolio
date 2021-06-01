import React from "react";
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.navBlock}>
            <a href="">about</a>
            <a href="">experience</a>
            <a href="">work</a>
            <a href="">contact</a>
        </div>
    )
}