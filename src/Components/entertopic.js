import React from "react";
import { useState } from "react";
// import TextareaAutosize from '@mui/base/TextareaAutosize';
// import Menu from "./menu";
import Preview from "./preview";
// import Button from "./button";
import Dropdown from "./Dropdown";

const EnterTopic=()=>{
  const [show , setShow]=useState(false);
  const [arrayvalues,setArrayvalues]=useState([])
  const[inputvalues,setInputvalues]=useState('')

  const handleinputchange=(e)=>{
    setInputvalues(e.target.value);
    console.log(inputvalues)
  }
const habdlearrayelements=()=>{
  if (inputvalues.trim() !== '') {
  if(arrayvalues.length >=10){
    setArrayvalues((prev)=>prev.slice(1))
  }
  setArrayvalues((prev)=>[...prev,inputvalues])
  setInputvalues('');
}
}

const data="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const handlePreview=()=>{

    console.log(show)
    setShow(!show);
  }

  return(<>
    <Dropdown  values={arrayvalues}/>
    <div className="col-sm-8">
      <p>Please Enter the requirenment to generate BRD</p>
      
      <textarea id="w3review" name="w3review" rows="4" cols="50" value={inputvalues} onChange={handleinputchange}/>
      <div className="btns">
        <button className="btn btn-primary"  onClick={habdlearrayelements}> Generate </button>
       
        <button className="btn btn-primary" onClick={handlePreview}>Preview </button>
        
      </div>
      {show && <Preview data={data}/>}
    </div>
    </>
  )
}
export default EnterTopic;