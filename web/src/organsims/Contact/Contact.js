import React from 'react'

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <span className="contactText">연락처</span>
        <i className="fas fa-plus"/>
      </div>
      <div className="contactSearch">
        <input type="text" placeholder="검색"/>
          <span>
            <i className="fas fa-search"/>
          </span>
      </div>
      <div className="contactInfo">
        <div className="name">
          이름
        </div>
      </div>
    </div>
  )
}
