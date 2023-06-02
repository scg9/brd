import React from "react";
import { useState } from "react";
// import TextareaAutosize from '@mui/base/TextareaAutosize';
// import Menu from "./menu";
import Preview from "./preview";
// import Button from "./button";
import axios from 'axios'
import Dropdown from "./Dropdown";
import OpenClosebrd from "./openClosebrd";

const EnterTopic=()=>{
  const [show , setShow]=useState(false);
  const [arrayvalues,setArrayvalues]=useState([])
  const[inputvalues,setInputvalues]=useState('')

  const handleinputchange=(e)=>{
    setInputvalues(e.target.value);
    // console.log(inputvalues)
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
const onclose=()=>{
  setShow(false);
}
const [result,setResult]=useState();
const [selectedoption,setSelectedooption] = useState('');
const [val,setVal]=useState("");
const [downloadedFileName, setDownloadedFileName] = useState('');
const handlechangearray=(e)=>{
  setSelectedooption(e.target.value);
  setInputvalues(e.target.value);
  setShow(false)
}
const handlechange=(e)=>{
    setInputvalues(e.target.value);
    setShow(false)
  }
  const fetchdata=(e)=>{
    // setShow(!show)
    if (e.type === 'keydown' && e.key === 'Backspace') {
      // Prevent updating the value when the backspace key is pressed
      return;
    }
    setVal(result);
  }
  const handleInputChange = (event) => {
    setVal(event.target.value);
  };
  // const handleDownload = () => {
  //   const element = document.createElement('a');
  //   const file = new Blob([result], { type: 'text/plain' });
  //   element.href = URL.createObjectURL(file);
  //   element.download = 'downloadedFile.txt';
  //   document.body.appendChild(element);
  //   element.click();
  //   setDownloadedFileName(element.download);
  // };
  // const handleOpenFile = () => {
  //   // Open the downloaded file
  //   window.open(URL.createObjectURL(new Blob([result])));
  // };
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([result], { type: 'application/msword' }); // or 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' for .docx format
    element.href = URL.createObjectURL(file);
    element.download = 'downloadedFile.doc'; // or 'downloadedFile.docx' for .docx format
    document.body.appendChild(element);
    element.click();
    setDownloadedFileName(element.download);
  };

  const [fileContent, setFileContent] = useState('');

  const handleFileChange = (e) => {
    console.log(e,"event")
  
    const input = document.createElement('input');
    input.type = 'file';

    input.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        setFileContent(contents);
      };

      reader.readAsText(file);
    });

    input.click();
  };
// const data="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const postdata=async()=>{
  try{
    const response=await axios.post('http://localhost:3002/',{data:'abc'})
    setResult(response.data);
    setShow(true);
    handleDownload();
    habdlearrayelements()

     console.log('res',response.data)
    } 
    catch(err){
      console.log("err",err);
    }
    // setShow(!show);
    // setShow(false);
  
  }

const handlePreview=()=>{

    console.log(show)
    setShow(!show);
    if(setShow(true)){
      setShow(false)
    }
    // setShow(true);
  }

  return(<>
    {/* <Dropdown  values={arrayvalues}/> */}
    <div >
      <select className='Dropdown select-history ' value={selectedoption} onChange={handlechangearray}>
            <option  className='OptionDropdown' value="" disabled> Select History</option>
                {arrayvalues.map((value, index) => (
            <option key={index} value={value}>
                        {value}
           </option>
        ))}
      </select> 
    {/* <p> {selectedoption}</p> */}
    </div>
    <div className="col-sm-12">
      <p className="Enterpara">PLEASE ENTER THE REQUIRENMENT TO GENERATE BRD</p>
    <div className="generatepreview">
      <div className="textAndBtn">
        <textarea id="w3review" name="w3review" rows="4" cols="50" value={selectedoption} onChange={handlechangearray}/>
        <button className="btn btn-primary"  onClick={postdata}> Generate BRD </button>
      </div>

         <div className="textAndBtn">
        <textarea id="w3review" value={val} rows="4" cols="50" onChange={handlechange}/>
        <button className="btn btn-primary"  onClick={fetchdata}> Preview BRD </button>
        </div>
      </div>
      {/* </div> */}
      {/* {show && <Preview data={data}/>} */}
      {show && (<div className='openclosebrdmain'>

<span id="filelocbrd">BRD Successfully generated </span>

<div className='openclosebtn'> 
     <button className='brdfile1' onClick={handleFileChange}>open </button>
     <button className='brdfile2' onClick={onclose}> close</button>
</div>
</div>
)}
    </div>
    </>
  )
}
export default EnterTopic;