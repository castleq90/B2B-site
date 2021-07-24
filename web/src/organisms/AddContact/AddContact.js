import React from 'react'
import Button from '../../atoms/Button/Button'
import './AddContact.scss'

export default function AddContact(props) {
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
              <input/>
            </dd>
            <dt>휴대폰 번호</dt>
            <dd className="numberContainer">
              <input/>
            </dd>
            <dt>이메일</dt>
            <dd className="emailContainer">
              <input/>
            </dd>
            <dt>회사명</dt>
            <dd className="companyContainer">
              <input/>
            </dd>
            <dt>부서명</dt>
            <dd className="departmentContainer">
              <input/>
            </dd>
            <dt>직책</dt>
            <dd className="positionContainer">
              <input/>
            </dd>
            <dt>메모</dt>
            <dd className="noteContainer">
              <textarea/>
            </dd>
          </div>
        </div>
        <div className="saveContainer">
          <Button>
            <span>저장</span>
          </Button>
        </div>
      </div>

      
    </div>
  )
}
