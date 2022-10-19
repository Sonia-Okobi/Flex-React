import React from 'react'
import './index.scss'

export default function Placeholder({className, placeholder}) {
  return (
    <input className={className} type="email" name='email' id='email' placeholder= {placeholder} />
  )
}
