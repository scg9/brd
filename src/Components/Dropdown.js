import React,{useState} from 'react'

const Dropdown=(props)=> {
console.log(props,"arrayvalue")
const arrayvalues=props.values
  const [selectedoption,setSelectedooption] = useState('');
  const handlechange=(e)=>{
    setSelectedooption(e.target.value);
  }
  return (
    <div >
     
    <select className='Dropdown' value={selectedoption} onChange={handlechange}>
      <option value="" disabled> Select History</option>
      {arrayvalues.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
        

    </select>
    {/* <p> {selectedoption}</p> */}
    </div>
  )
}
export default Dropdown;
