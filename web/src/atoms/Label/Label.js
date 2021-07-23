import React from 'react'
import './Label.scss'

export default function Label({children,htmlfor}) {
  return (
    <label className="labelText" for={htmlfor}>{children}</label>
  )
}
