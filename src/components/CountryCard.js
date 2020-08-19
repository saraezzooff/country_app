import React from 'react';
import { Card, Col } from 'react-materialize';


const CountryCard = ({viewCountryInfo,style, country})=>{

    return(
        <Col className="s12 m6 l3">
              
        <Card style={style}>
    
              <div className="card-image">
               
                    <img src={country.flag} alt="Flag" onClick={()=> viewCountryInfo(country.name)} />
               
              </div>
       
              <div className="card-content black-text">
                <h5 style={style} className="card-title">{country.name.length > 25 ? `${country.name.substring(0, 18)}...`:country.name}</h5>
                <p style={style} >Population : {country.population.toLocaleString()}</p>
                <p style={style}>Region : {country.region}</p>
                <p style={style}>Capital : {country.capital}</p>
              </div>

               
         </Card>
       
    </Col>
    );
}

export default CountryCard;