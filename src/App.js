import React,{useState, useEffect} from 'react';
import Country from './components/Country';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import Toggle from './components/Toggler';
import MoonIcon from './icons/night.svg';
import SunIcon from './icons/sun.svg';
import CountryDetails from './components/CountryDetails';



const API_URL = 'https://restcountries.eu/rest/v2/all';
function App() {

  const [countries,setCountries] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [currentCountry, setCurrentCountry] = useState([]);


  
  const viewCountryInfo = (name) =>{
    const filteredCountries = countries.filter(country => country.name === name);
    const newCurrentCountry = filteredCountries.length > 0 ? filteredCountries[0] : null;
    setCurrentCountry(name); 
    console.log(currentCountry);
  }

  const backBtn = () =>{
    setCurrentCountry([]);
  }

// The function that toggles between themes
const toggleTheme = () => {
  // if the theme is not light, then set it to dark
  document.body.classList.toggle('dark-mode');
  document.getElementById('toggleknop').innerHTML = document.body.classList.contains('dark-mode') ?
  ('<p>Dark </p>',
 '<img id="sun" src="' + SunIcon + '" width="40px" height="40px" />')
  :'<img id="moon" src="' + MoonIcon + '" width="40px" height="40px" />';

  if (theme === 'light') {
    setTheme('dark');
  // otherwise, it should be light
  } else {
    setTheme('light');
  }
}


  useEffect(() =>{
    const getCountries = async ()=>{
      const res = await fetch(API_URL);
      const data = await res.json();
      setCountries(data);
    }

    getCountries();
    console.log(countries);
  },[]);
  return (


    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
 
        <header className={theme}>
        <h6>Where in the world ?</h6>
            <Toggle  id="toggleknop" theme={theme} toggleTheme={toggleTheme} />
        </header>

<div>{

       currentCountry == "" ? (
        countries.length > 0 ?(

            theme === 'light' ? (
              <div>
              <Country data={countries}  viewCountryInfo={viewCountryInfo} currentCountry={currentCountry} style={lightTheme}/>
              </div>
            )
            : 
            (
              <div>
              <Country data={countries}  viewCountryInfo={viewCountryInfo} style={darkTheme}/>
              </div>
            )
      ): <h1>Loading .......</h1>
     ) : <CountryDetails currentCountry={currentCountry} backBtn={backBtn}/>
    }
        
   </div>  
    </>
  </ThemeProvider>
    
  );
}

export default App;
