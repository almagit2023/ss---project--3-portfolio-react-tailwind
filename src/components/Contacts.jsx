import React from 'react'
import { CONTACT } from '../constants'

const Contaacts = () => {
  return (
    <div className='border-b-2 border-t-2 border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <p>{CONTACT.email}</p>
      </div>
    </div>
  )
}

export default Contaacts