import React from 'react'
import './BlueButton.scss'

export default function BlueButton({onClick,className,children,disabled}) {

  return (
    <button className={className} onClick={onClick} disabled={disabled}>{children}</button>
  )
}


