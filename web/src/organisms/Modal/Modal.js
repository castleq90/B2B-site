import React, { useEffect } from 'react';
import './Modal.scss'

export default function Modal({children}) {

  useEffect (()=>{
    document.body.style.overflow='hidden';
    return() => (document.body.style.overflow='auto');
  },[]);

  return (
    <div className="modalContainer">
      <div className="modalWrapper">
        {children}
      </div>
    </div>
  )
}
