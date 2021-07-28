import React, { useState } from 'react';
import Navbar from '../../organisms/Navbar/Navbar';
import Calendar from '../../organisms/Calendar/Calendar';
import Modal from '../../organisms/Modal/Modal';
import Detail from '../../molecules/Detail/Detail'
// import AddContact from '../../organisms/AddContact/AddContact';
import Contact from '../../organisms/Contact/Contact';

export default function Main() {
  
  const [ detailOn, setDetailOn ] = useState(false)
  const [ addOn, setAddOn ] = useState(false)
  
  const handleDetail = () =>{
    setDetailOn(!detailOn)
  }  

  const handleContact = () => {
    setAddOn(!addOn)
  }

  

  return (
    <div>
      <Navbar/>
      <Calendar handleDetail ={ handleDetail }/>
      <Contact handleContact = {handleContact} addOn={addOn} />
      {detailOn &&(
      <Modal>
        <Detail toClose={handleDetail} />
      </Modal>
      )}
    </div>
  )
}
