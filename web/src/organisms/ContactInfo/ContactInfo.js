import React, {useState, useEffect} from 'react'
import Contact from '../Contact/Contact'
import './ContactInfo.scss'

export default function ContactInfo({pathNumber,toClose}) {
 
  const [detail,setDetail] = useState([])
  

  // useEffect(() => {
  //   fetch('/data/mock.json')
  //   .then(res=>res.json())
  //   .then(data=>setDetail(data))
  // },[])

  
  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/contact/${pathNumber}`)
      .then(res=>res.json())
      .then(data=>setDetail(data))
  },[])


  return (
    <div className="addContainer">
      <div className="addWrapper">
        <header>
          <h4>
            <span>연락처 세부사항</span>
            <button onClick={toClose}>
              <i className="fas fa-times fa-lg"/>
            </button>
          </h4>
        </header>
        <div className="clientContainer">
          <div className="clientWrapper">
            <dt>이름</dt>
            <dd className="nameContainer">
              <span>{detail.name}</span>
            </dd>
            <dt>휴대폰 번호</dt>
            <dd className="numberContainer">
              <span>{detail.phone_number}</span>
            </dd>
            <dt>이메일</dt>
            <dd className="emailContainer">
              <span>{detail.email}</span>
            </dd>
            <dt>회사명</dt>
            <dd className="companyContainer">
              <span>{detail.company}</span>
            </dd>
            <dt>부서명</dt>
            <dd className="departmentContainer">
              <span>{detail.department}</span>
            </dd>
            <dt>직책</dt>
            <dd className="positionContainer">
              <span>{detail.responsibility}</span>
            </dd>
            <dt>메모</dt>
            <dd className="noteContainer">
              <span>{detail.memo}</span>
            </dd>
          </div>
        </div>
      </div>

      
    </div>
  )
}
