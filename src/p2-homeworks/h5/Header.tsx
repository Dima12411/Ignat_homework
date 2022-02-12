import React, {useState} from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


function Header() {
    return (
        <nav className={s.container}>
                <div className={s.navigation}>
                    <NavLink className={({isActive}) => (isActive ? s.active : s.item)} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                    <NavLink className={({isActive}) => (isActive ? s.active : s.item)} to={PATH.JUNIOR}>Junior</NavLink>
                    <NavLink className={({isActive}) => (isActive ? s.active : s.item)} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
                    <span className={s.span}>Navigation</span>
                </div>
        </nav>
    )
}

export default Header
