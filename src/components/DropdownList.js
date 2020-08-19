import React from 'react'


const Dropdown = ({Add, handleAddrTypeChange})=>{

      return (
        <>
        <div className="custom-select">

        < select
        name = "dropdown"
        onChange={e => handleAddrTypeChange(e)}
        className="browser-default custom-select" >
        {
          Add.map((address, key) => <option key={key}value={key}>{address}</option>)
        }
      </select >
      </div>
  </>
  
      );
    
  }




export default Dropdown;