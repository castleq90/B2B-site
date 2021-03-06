import React from 'react'
import './Input.scss'

export default function Input({type,value,onChange,placeholder,name}) {

  return (
    <input className="commonInput"
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}></input>
  )
}
