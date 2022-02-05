import React, {useState} from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


function Header() {
    return (
        <nav className={s.container}>
                <div className={s.navigation}>
                    <NavLink className={s.navlink} to={PATH.PRE_JUNIOR}>PreJunior &nbsp;</NavLink>
                    <NavLink className={s.navlink} to={PATH.JUNIOR}>Junior &nbsp;</NavLink>
                    <NavLink className={s.navlink} to={PATH.JUNIOR_PLUS}>JuniorPlus &nbsp;</NavLink>
                    <span>&nbsp; &gt;&nbsp; </span>
                </div>
        </nav>
    )
}

export default Header
