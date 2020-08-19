import React from 'react';

const InputField = ({countrySearch,setCountrySearch})=>{


    return (    
   <div className="input_container">
    <i className="fas fa-search"></i>
      <input 
      className="input-field"
      type="text" 
      name="search"
      value={countrySearch}
      placeholder="Search for a country"
      onChange={e => {
        setCountrySearch(e.target.value.toLowerCase());
        }}
/>
    </div>
);
}

export default InputField;