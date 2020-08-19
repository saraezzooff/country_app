import React,{useEffect, useState} from 'react';

const CountryDetails = ({currentCountry,backBtn}) =>{

    const API_URL = `https://restcountries.eu/rest/v2/name/${currentCountry}`;
    console.log(API_URL);

    const [countryDetails, setCountryDetails] = useState([]);

    useEffect(() =>{
        const getCountryDetails = async ()=>{
          const res = await fetch(API_URL);
          const data = await res.json();
          setCountryDetails(data);
        }
    
        getCountryDetails();
        console.log(countryDetails);
      },[]);
    return(
        <div>
            {
                countryDetails.length > 0 ? (
                    <div>
            <div className="backBtn" onClick={backBtn}><i className="fas fa-long-arrow-alt-left"></i> Back</div>
            <div className="country_info">
               
            <div className="country_img">   
                       <img src={countryDetails[0].flag} width="400px" height="400px" alt="Flag" />
                  
                 </div>
                 <div className="all_subInfo">
                 <h4>{countryDetails[0].name}</h4>
                 <div className="sub_info">
                     <div>
                <p><strong>Native Name:</strong> {countryDetails[0].nativeName}</p>
                <p><strong>Region:</strong> {countryDetails[0].region}</p>
                <p><strong>Sub Region:</strong> {countryDetails[0].subregion}</p>
                <p><strong>Capital:</strong> {countryDetails[0].capital}</p>
                         </div>
                         { <div>
                             <p><strong>Top Level Domain:</strong> {countryDetails[0].topLevelDomain[0]}</p>
                             <p><strong>Currencies:</strong> {countryDetails[0].currencies[0].name} </p>
                             <p><strong>Languages:</strong> {countryDetails[0].languages[0].name}</p> 
                             </div> }
               
       
                 </div>
                 </div>
            </div>
            </div>
                )
            :<h1>Loading</h1>
}
        </div>
    );};


export default CountryDetails;