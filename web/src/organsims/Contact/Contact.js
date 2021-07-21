import React from 'react'
import './Contact.scss'

const CONTACT = [
  {
    name: '오선주',
    number: '01011113333'
  },
  {
    name: '이정민',
    number: '01022223333'
  },
  {
    name: '김성규',
    number: '01044443333'
  },
  {
    name: '강준희',
    number: '01012345670'
  },
  {
    name: '김건우',
    number: '01022345566'
  },
  {
    name:'김지민',
    number:'01022223342'
  },
  {
    name:'이도윤',
    number:'01012340987'
  },
  {
    name:'한성봉',
    number:'01098765432',
  },
  {
    name:'배찬영',
    number:'01046533243',
  },
  {
    name:'최승리',
    number:'01009877777'
  }
]

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactHeader">
          <span>연락처</span>
        <i className="fas fa-plus"/>
      </div>
      <div className="contactSearch">
        <input type="text" placeholder="검색"/>
          <span>
            <i className="fas fa-search"/>
          </span>
      </div>
      <div className="contactInfo">
        {CONTACT.map((person, index)=>{
          return(
            <div className="infoWrapper">
              <p key={index} className="name">
                {person.name}
              </p>
              <p className="phoneNumber">
                {person.number}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
