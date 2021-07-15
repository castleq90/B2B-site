import { Link } from 'react-router-dom';
import React from 'react'
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav className="navContainer">
      <div className="navWrapper">
        <div className="mainLogo">
          <span>B2F</span>
        </div>
        <div className="searchContainer">
          <input type="text" placeholder="검색"/>
          <span>
            <i className="fas fa-search"/>
          </span>
        </div>
        <div className="sideMenu">
          <div className="nameContainer">
          <span>{PROFILE[0].name}</span>
          <i className="fas fa-sort-down"/>
          </div>
          <Link to ='/login' className="logout">로그아웃</Link>
          <i className="fas fa-bell"/>
        </div>
      </div>
    </nav>
  )
}


const PROFILE = [
  {
    name:"오선주"
  }
]