import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import EnterTopic from './entertopic';
import Menu from './menu';
import OpenClosebrd from './openClosebrd';

const Mainbox=()=>{
  return(
<div className>
    <div className='MainArea'>
      <p className='para1'> <b>ABSLI BRD Automation</b></p>
      <div className='MenuAndBrd row'>
           <EnterTopic/>
      </div>
    </div>
</div>
)
}
export default Mainbox;


