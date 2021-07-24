import React from 'react'
import './Contact.scss'

const CONTACT = [
  {
    name: '오선주',
    number: '010-1111-3333'
  },
  {
    name: '이정민',
    number: '010-2222-3333'
  },
  {
    name: '김성규',
    number: '010-4444-3333'
  },
  {
    name: '강준희',
    number: '010-1234-5670'
  },
  {
    name: '김건우',
    number: '010-2234-5566'
  },
  {
    name:'김지민',
    number:'010-2222-3342'
  },
  {
    name:'이도윤',
    number:'010-1234-0987'
  },
  {
    name:'한성봉',
    number:'010-9876-5432',
  },
  {
    name:'배찬영',
    number:'010-4653-3243',
  },
  {
    name:'최승리',
    number:'010-0987-7777'
  }
]

export default function Contact(props) {
  return (
    <div className="contactContainer">
      <div className="contactHeader">
          <span>연락처</span>
        <i className="fas fa-plus" onClick={props.handleContact}/>
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
