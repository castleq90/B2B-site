import React, { useState } from 'react';
import Navbar from '../../organsims/Navbar/Navbar'
import Calendar from '../../organsims/Calendar/Calendar'
import Modal from '../../organsims/Modal/Modal'
import Detail from '../../molecules/Detail/Detail'

export default function Main() {
  
  const [ detailOn, setDetailOn ] = useState(false)

  const handleDetail = () =>{
    setDetailOn(!detailOn)
  }  
  return (
    <div>
      <Navbar/>
      <Calendar handleDetail ={ handleDetail }/>
      {detailOn &&(
      <Modal>
        <Detail toClose={handleDetail}/>
      </Modal>
      )}
    </div>
  )
}
