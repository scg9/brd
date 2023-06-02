import './App.css';
import {useState} from 'react';
import Mainbox from './Components/mainbox';
import axios from 'axios'
function App() {
  // const [result,setResult]=useState();
  // const [val,setVal]=useState("");
  // const [show, setShow]=useState(false);

//   const handleInputChange = (event) => {
//     setVal(event.target.value);
//   };

//   const fetchdata=()=>{
//     // setShow(!show)
//     setVal(result);
//   }
// const postdata=async()=>{
//   try{
//     const response=await axios.post('http://localhost:3002/',{data:'hjg hasdgjha hdsgsj'})
//     setResult(response.data);

//      console.log('res',response.data)
//     } 
//     catch(err){
//       console.log("err",err);
//     }
  
//   }
//   const handleDownload = () => {
//     const element = document.createElement('a');
//     const file = new Blob([result], { type: 'text/plain' });
//     element.href = URL.createObjectURL(file);
//     element.download = 'downloadedFile.txt';
//     document.body.appendChild(element);
//     element.click();
//   };
//   return (
//     <div className="App">
//         <Mainbox/>
//       <textarea id="myTextarea" rows="4" cols="50" value={val}onChange={handleInputChange} ></textarea>
//       <button type="button" onClick={postdata}>Generate BRD</button>
//       <button type="button" onClick={fetchdata}>Preview BRD</button>
//       <button type="button" onClick={() => { document.querySelector('input[type="file"]').click(); }}>
//   Select Directory
// </button>
//  <input type="file" directory="" webkitdirectory="" style={{ display: 'none' }} />
//       {/* {
//         show && <Preview/>
//       } */}
//         <button type="button" onClick={handleDownload}>Download Text</button>
//     </div>
//   );
  return (
    <div className="App">
      <Mainbox/>
    </div>
  );
}
export default App;
