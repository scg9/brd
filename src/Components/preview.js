import React from 'react'

export default function Preview(props) {
  return (
    <div className='box'>
    <div className='preview'>
     <p>{props.data}</p>
    </div>
    </div>
  )
}
