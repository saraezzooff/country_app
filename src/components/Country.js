import React, { useState} from 'react';
import { Row } from 'react-materialize';
import InputField from './InputField';
import CountryCard from './CountryCard';
import Dropdown from './DropdownList';


const Country = ({ data, style, viewCountryInfo }) => {
  const [countrySearch, setCountrySearch] = useState([]);
  const [addrtype, setAddrtype] = useState(["Filter by Region", "Africa", "America", "Asia", "Europe"]);
  const [choosenValue, setChoosenValue] = useState([]);


  const byCountryName = (country) => {

    return country.name.toLowerCase().includes(countrySearch);
  }

  const Add = addrtype.map(Add => Add)

  const byCountryRegion = (country) => {

    return (
      country.region.toLowerCase().includes(choosenValue.toLowerCase())

    )

  }


  const handleAddrTypeChange = (e) => {
    setChoosenValue((addrtype[e.target.value]));


  }



  return (
    <div>

      <div className="controlBtn">
        <div >
          <InputField countrySearch={countrySearch} setCountrySearch={setCountrySearch} setChoosenValue={setChoosenValue} />

        </div>

        <div >
          <div className="custom-select">

            <Dropdown Add={Add} handleAddrTypeChange={handleAddrTypeChange} />
          </div>
        </div>

      </div>
      <Row className="main">
        {choosenValue.length > 0 ? (

            data.filter(byCountryRegion).sort((a, b) => b.population - a.population).map((country) => (
              <CountryCard viewCountryInfo={viewCountryInfo} style={style} country={country} />
            ))
  
          


        )


          : (
            data.filter(byCountryName).sort((a, b) => b.population - a.population).map((country) => (
              <CountryCard viewCountryInfo={viewCountryInfo} style={style} country={country} />

            ))

          )


        }
      </Row>
    </div>



  )
};  // end of return and func

export default Country;

