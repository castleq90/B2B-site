import React, { useState } from 'react';
import Button from '../../atoms/Button/Button'
import './AddContact.scss'

export default function AddContact(props) {

  

  const [contact, setContact ] = useState({
    name:'',
    number:'',
    email:'',
    company:'',
    department:'',
    position:'',
    memo:''
  })



  const handleContact = (e) =>{
    const {name, value} = e.target;
    setContact({...contact, [name]:value});
  }

  const sendToContact =()=>{
    props.setContact(props.contact.concat(contact))
    props.toClose();
  }

  return (
    <div className="addContainer">
      <div className="addWrapper">
        <header>
          <h4>
            <span>연락처 추가</span>
            <button onClick={props.toClose}>
              <i className="fas fa-times fa-lg"/>
            </button>
          </h4>
        </header>
        <div className="clientContainer">
          <div className="clientWrapper">
            <dt>이름</dt>
            <dd className="nameContainer">
              <input name="name" onChange={handleContact}/>
            </dd>
            <dt>휴대폰 번호</dt>
            <dd className="numberContainer">
              <input name="number" onChange={handleContact}/>
            </dd>
            <dt>이메일</dt>
            <dd className="emailContainer">
              <input name="email" onChange={handleContact}/>
            </dd>
            <dt>회사명</dt>
            <dd className="companyContainer">
              <input name="company" onChange={handleContact}/>
            </dd>
            <dt>부서명</dt>
            <dd className="departmentContainer">
              <input name="department" onChange={handleContact}/>
            </dd>
            <dt>직책</dt>
            <dd className="positionContainer">
              <input name="position" onChange={handleContact}/>
            </dd>
            <dt>메모</dt>
            <dd className="noteContainer">
              <textarea name="memo" onChange={handleContact}/>
            </dd>
          </div>
        </div>
        <div className="saveContainer">
          <Button>
            <span onClick={sendToContact}>저장</span>
          </Button>
        </div>
      </div>

      
    </div>
  )
}
