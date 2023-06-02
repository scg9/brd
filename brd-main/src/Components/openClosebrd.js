import React, { useState } from 'react'

export default function OpenClosebrd(props) {
  const[close ,setClose]=useState(false)
  console.log(props.close,"close")
  const closeprop=props.close;

  const onclose=()=>{
    // if(closeprop)
    // setClose(!close)
    setClose(false);
  }

  return (
    <div className='openclosebrdmain'>

      <span id="filelocbrd">BRD Successfully generated and saved to the .... location</span>

      <div className='openclosebtn'> 
      <button className='brdfile'> open</button>
      <button className='brdfile' onClick={onclose}> close</button>
      </div>
    </div>

  )
}
