import React,{useState, useEffect} from 'react'
import AddContact from '../../organisms/AddContact/AddContact';
import Modal from '../../organisms/Modal/Modal';
import ContactInfo from '../../organisms/ContactInfo/ContactInfo'
import './Contact.scss'

export default function Contact(props) {

const [contact, setContact] = useState([]);
const [search, setSearch ] = useState('');
const [filterItem, setFilterItem] = useState([]);
const [ info, setInfo ] = useState(false)

//id 값 저장 용 state 관리 나중에 바꿔도 됨
const [pathNumber, setPathNumber] = useState();


const handleInfo = (e) => {
  setInfo(!info)
  //id값 state에 저장 ->contactInfo로 props 전달
  setPathNumber(e.target.value);
}



useEffect(()=>{
  fetch('http://127.0.0.1:8000/contact/'
    )
  .then(res=> res.json())
  .then(data=> setFilterItem(data))
},[])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/contact/')
    .then(res=>res.json())
    .then(data=>setContact(data))
    
    setFilterItem(contact.filter(object=> object.name.indexOf(search)!==-1))
  }, [search])



  useEffect(()=>{
    fetch('http://127.0.0.1:8000/contact/' , {
      body:{
        "contact": contact
      },
      method: 'POST'
    })
  },[contact])

  const deleteContact = (id) =>{

    setContact(contact.filter((a => a.id !== id)))

  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
    <div className="contactContainer">
      <div className="contactHeader">
          <span>연락처</span>
        <i className="fas fa-plus" onClick={props.handleContact}/>
      </div>
      <div className="contactSearch">
        <input type="text" placeholder="검색" value={search} onChange={handleSearch}/>
          <span>
            <i className="fas fa-search"/>
          </span>
      </div>
      <div className="contactInfo">
        {filterItem?.map((person, index)=>{
          return(                       
            <div className="infoWrapper" value={person.id} onClick={handleInfo}>
              <p key={index} className="name">
                {person.name}
              </p>
              <p className="phoneNumber">
                {person.phone_number}
              </p>
              <button onClick={()=>deleteContact(person.id)} >X</button>
            </div>
          )
        })}
      </div>
    </div> 
    {props.addOn&&<Modal>
      <AddContact toClose={props.handleContact} setContact={setContact} contact={contact}/>
    </Modal>
    }
    {props.info&&<Modal>
      <ContactInfo toClose={props.handleInfo} pathNumber={pathNumber}/> 
      </Modal>
    }             
  </>
  )
}
