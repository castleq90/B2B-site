import React, { useState } from "react";
import "./AddContact.scss";

export default function AddContact({ setRenderValid, renderValid, toClose }) {
  const [addContact, setAddContact] = useState({
    name: "",
    phone_number: "",
    email: "",
    company: "",
    department: "",
    responsibility: "",
    memo: "",
  });

  const handleContact = (e) => {
    const { name, value } = e.target;
    setAddContact({ ...addContact, [name]: value });
  };

  // const sendToContact =()=>{
  //   props.setContact(props.contact.concat(contact))
  //   props.toClose();
  // }

  const sendContactData = () => {
    fetch("http://0.0.0.0:8000/contact/", {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(addContact),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        setRenderValid(!renderValid);
        toClose();
      });
  };

  return (
    <div className="addContainer">
      <div className="addWrapper">
        <header>
          <h4>
            <span>연락처 추가</span>
            <button onClick={toClose}>
              <i className="fas fa-times fa-lg" />
            </button>
          </h4>
        </header>
        <div className="clientContainer">
          <div className="clientWrapper">
            <dt>이름</dt>
            <dd className="nameContainer">
              <input name="name" onChange={handleContact} />
            </dd>
            <dt>휴대폰 번호</dt>
            <dd className="numberContainer">
              <input name="phone_number" onChange={handleContact} />
            </dd>
            <dt>이메일</dt>
            <dd className="emailContainer">
              <input name="email" onChange={handleContact} />
            </dd>
            <dt>회사명</dt>
            <dd className="companyContainer">
              <input name="company" onChange={handleContact} />
            </dd>
            <dt>부서명</dt>
            <dd className="departmentContainer">
              <input name="department" onChange={handleContact} />
            </dd>
            <dt>직책</dt>
            <dd className="positionContainer">
              <input name="responsibility" onChange={handleContact} />
            </dd>
            <dt>메모</dt>
            <dd className="noteContainer">
              <textarea name="memo" onChange={handleContact} />
            </dd>
          </div>
        </div>
        <div className="saveContainer" onClick={sendContactData}>
          <button className="saveButton">
            <span>저장</span>
          </button>
        </div>
      </div>
    </div>
  );
}
