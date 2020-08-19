import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .card-image img{
    width: 100%;
    height: 200px;
    object-fit: cover;


}
.card-content {
    text-align: left;
}


.card{
    width: 280px;
    margin: 40px;
}

.card .card-title{
    font-size: 14px;
    font-weight: bold;
}

header.dark, 
.dark,
.dark:focus
{
    background-color: hsl(209, 23%, 22%) !important;
    

}
  button {
    outline: none;
    border: none;
   float: right;  
   color:hsl(207, 26%, 17%);
} 

header{
    margin-bottom: 50px;
    height: 64px;
    line-height: 64px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);

   
}

h6{
    vertical-align: middle;
    margin-left: 50px;
    margin-top: 20px;
    text-weight: 700 !important;
}


header.light,
.light:focus
{
    background-color: '#E2E2E2' !important;
}
#mode{
    line-height: 2.5;
    color:hsl(0, 0%, 100%);


}
 
button:focus{
    outline: none;

}
.dark-mode #moon
{
    transform: translate(40px);
    transition: all 0.3s linear;

}

.dark-mode #sun{
    transform: translate(0px);
    transition: all 0.3s linear;
}

input {
  padding-left: 30px !important; 
  border: 1px solid #ccc !important;
  color: #333;
  width: 100%;
 
}
.input_container{
  position: relative;
  padding: 0 0 0 20px;
  margin: 0 30px 0 30px !important;
  width: 260px;
  color:${({ theme }) => theme.color};

}
.input_container i{
  position: absolute;
  bottom:5px;
  left:15px;
  width:24px;
  height:24px;
  line-height: 4.5px;
  color: #ccc;
  padding: 0 10px;
}
input{
  color:${({ theme }) => theme.color};

}
Card{
  cursor: pointer;

}

.country_info{
  display: flex;


}
.all_subInfo{
  margin: 50px;
}

.country_img img {
  margin: 50px;
  
}

.card .card-image img{
  cursor: pointer !important;
}

.sub_info{
  display: flex;
  justify-content: space-between;

}

strong{
  font-weight: 700 !important;
}

.sub_info div:nth-child(1){
margin-right: 50px;
}

.backBtn{
  padding: 5px;
  background: ${({ theme }) => theme.background};
  margin: 50px;
  width: 100px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 2px;
  

}

.dd-wrapper {
  display: flex;
  min-height: 38px;
  flex-wrap: wrap;
  width: 250px;
}

.dd-header {
  background-color: white;
  border-color: #ccc;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  padding: 0 20px;
}
.dd-header-title{
  display: flex;
  justfy-content: space-between;
}
.dd-header-title-bold {
  font-weight: bold;
}
.dd-list {
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 20px;
}

li {
  list-style-type: none;
}

.custom-select{
  width: 200px;
  float: right;
}
.controlBtn{

  display: flex;
  justify-content: space-between !important;
  height: 100px;
}

.controlBtn > select 
{
  float: right;
}

select{
  background-color: ${({ theme }) => theme.background};
  color:${({ theme }) => theme.color};
}
  `
