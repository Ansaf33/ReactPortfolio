import React from "react";
import {languages,webdev,database_frameworks_others} from "./Skilldetails";

function createButt(props){


  return (

    <div>
      <button class="Btn">
  
  <div class="sign"><img src={props.URL} className="svgIcon"></img></div>
  
  <div class="text">{props.name}</div>
</button>



    </div>
  )

  
}


function SkillBox(){
  return (
    <div className="skillset">
      <h1 className="font text-3xl" id="education"> Programming Languages </h1>
      <div className="buttoncontainer">
         {languages.map(createButt)}
      </div>

      <h1 className="font text-3xl" id="education"> Web Development </h1>
      <div className="buttoncontainer">
         {webdev.map(createButt)}
      </div>

      <h1 className="font text-3xl" id="education"> Database, Frameworks and Others </h1>
      <div className="buttoncontainer">
         {database_frameworks_others.map(createButt)}
      </div>

  
  </div>)
  
}




export default SkillBox;