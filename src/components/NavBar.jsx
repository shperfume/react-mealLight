import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '../assets/logo.png'

function NavBar() {
    return (
        <header>
            <div className="top-area">
                <h1 className="logo">
                    <Link to='/'>
                        <img src={logoImg} alt="myplate" />
                        <span>MY</span>
                        <span>PLATE</span>
                    </Link>
                </h1>
            </div>
            <nav className="gnb">
                <NavLink to='/'>Home</NavLink>{/* 내가 보고 있는 페이지를 표시함 */}
                <NavLink to='/meals'>식단관리</NavLink>
                <NavLink to='/tips'>건강팁</NavLink>
                <NavLink to='/about'>MY PLATE</NavLink>
            </nav>
        </header>
    )
}

export default NavBar