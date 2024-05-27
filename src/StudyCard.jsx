import React from "react";
import Education from "./studydetails";

function createCard(institute){
  return ( <article>
    <div className="article-wrapper">
      <figure>
        <img src={institute.imgURL} alt="Image of Institute" id="inst_img" />
      </figure>
      <div className="article-body mr-5" id="instname">
        <h2 className="navbar-brand fw-bold">{institute.place}</h2>
        <p>
          {institute.year}
        </p>
        <a href={institute.ref} target="_blank" className="read-more">
          Visit Site <span className="sr-only">{institute.grade}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>);
}




function StudyCard(){
  return (
    <div id="studycard">
      <h1 className="font text-3xl" id="education"> Education </h1>
      <section className="articles">
        {Education.map(createCard)}
      </section>
      </div>

  
  
  





  );
  




  


}

export default StudyCard;