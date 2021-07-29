import React, { useState, useEffect } from "react";
import AddContact from "../../organisms/AddContact/AddContact";
import Modal from "../../organisms/Modal/Modal";
import ContactInfo from "../../organisms/ContactInfo/ContactInfo";
import "./Contact.scss";

export default function Contact(props) {
  const [contact, setContact] = useState([]);
  const [search, setSearch] = useState("");
  const [filterItem, setFilterItem] = useState([]);
  const [info, setInfo] = useState(false);
  const [renderValid, setRenderValid] = useState(false);
  const [detail, setDetail] = useState([]);
  const [pageNum, setPageNum] = useState();

  const openInfo = (e) => {
    setInfo(!info);
    fetch(`http://0.0.0.0:8000/contact/${e.target.id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data))
      .then(() => {
        setPageNum(e.target.id);
      });
  };

  const handleInfo = () => {
    setInfo(!info);
    fetch("http://0.0.0.0:8000/contact/")
      .then((res) => res.json())
      .then((data) => setFilterItem(data));
  };

  useEffect(() => {
    fetch("http://0.0.0.0:8000/contact/")
      .then((res) => res.json())
      .then((data) => setFilterItem(data));
  }, []);

  useEffect(() => {
    fetch("http://0.0.0.0:8000/contact/")
      .then((res) => res.json())
      .then((data) => {
        console.log(`data`, data);
        // setFilterItem(data);
        setFilterItem(data);
      });
    // console.log(`renderValid`, renderValid);
    // console.log(`contact`, contact)
  }, [renderValid]);

  useEffect(() => {
    fetch("http://0.0.0.0:8000/contact/")
      .then((res) => res.json())
      .then((data) => setContact(data));

    setFilterItem(
      contact.filter((object) => object.name.indexOf(search) !== -1)
    );
  }, [search]);

  // useEffect(()=>{
  //   fetch('http://0.0.0.0:8000/contact/' , {
  //     body:JSON.stringify({
  //      contact
  //     }),
  //     method: 'POST'
  //   })
  // },[contact]);

  const deleteContact = (id) => {
    setContact(contact.filter((a) => a.id !== id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="contactContainer">
        <div className="contactHeader">
          <span>연락처</span>
          <i className="fas fa-plus" onClick={props.handleContact} />
        </div>
        <div className="contactSearch">
          <input
            type="text"
            placeholder="검색"
            value={search}
            onChange={handleSearch}
          />
          <span>
            <i className="fas fa-search" />
          </span>
        </div>
        <div className="contactInfo">
          {filterItem?.map((person, index) => {
            return (
              <div
                className="infoWrapper"
                id={person.id}
                key={index}
                onClick={openInfo}
              >
                <p className="name" id={person.id} onClick={openInfo}>
                  {person.name}
                </p>
                <p className="phoneNumber" id={person.id} onClick={openInfo}>
                  {person.phone_number}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {props.addOn && (
        <Modal>
          <AddContact
            toClose={props.handleContact}
            setContact={setContact}
            contact={contact}
            setRenderValid={setRenderValid}
            renderValid={renderValid}
          />
        </Modal>
      )}
      {info && (
        <Modal>
          <ContactInfo toClose={handleInfo} detail={detail} pageNum={pageNum} />
        </Modal>
      )}
    </>
  );
}
