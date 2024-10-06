import React, { useState } from "react";
import './style.css'
export default function App(){

    let api = {
      key: "083cda15f577e114f725b2d86aa22189",
        url:"https://api.openweathermap.org/data/2.5/weather"
      }

    let[search,setsearch]=useState("");
    let[weather,setWeather]=useState({});
    let[errormsg,seterrormsg]=useState("")
        
    //https://openweathermap.org/find?q=pune
    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    function Seraching(){
        fetch(`${api.url}?q=${search}&appid=${api.key}&units=metric`)
        .then(res=>res.json().then(x=>{setWeather(x);
                                       seterrormsg(x.message)}));
                                       seterrormsg("loading...")

    }

    let usingkey=(e)=>{
        if (e.key==="Enter"){
            Seraching();
            
        }
    }
   
    console.log(errormsg)
  
    return(<>
    <div id="main">
    <img src="https://clipart-library.com/images/5cRKeApbi.png" alt="img1" id="img1"/>
    <img src="https://clipart-library.com/images/5cRKeApbi.png" alt="img2" id="img2"/>
    <img src="https://clipart-library.com/images/5cRKeApbi.png" alt="img3" id="img3"/>
    <img src="https://clipart-library.com/images/5cRKeApbi.png" alt="img4" id="img4"/>
    <div id="sub">
    <div>
    <h1 id="tit">WEATHER</h1><br /> <hr/>
    <input id="inp" placeholder="enter city" onChange={e=>{setsearch(e.target.value);seterrormsg("")}}  onKeyPress={usingkey}  type="Search"/>
    <div>
    <div id="data">
        {(weather.main!== undefined)?
          (<>
          <h1>{weather.name}</h1>
          <p>Temparature : <b> {weather.main.temp} &deg;C</b> </p>
          </>):
          (errormsg)}
    </div>
    <button className="btn btn1" onClick={Seraching} onKeyUp={usingkey} >Search</button>
    <button className="btn btn2" onClick={()=>{setWeather({})}}>Clear</button> 
    </div> 
    </div>

    
    </div>
    </div>
    
    </>)

}