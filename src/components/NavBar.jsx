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
                <NavLink to='/'>Home</NavLink>{/* 클래스를 붙여 삼항연산자 등을 통해 내가 보고있는 페이지를 표시할 수 있다*/}
                <NavLink to='/meals'>식단관리</NavLink>
                <NavLink to='/tips'>건강팁</NavLink>
                <NavLink to='/about'>MY PLATE</NavLink>
            </nav>
        </header>
    )
}

export default NavBar