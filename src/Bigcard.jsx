import React from "react";

function Bigcard(){

  return(
    <div id="aboutme">
    <div className="relative mt-16 mb-32 max-w-sm mx-auto mt-24">
        <div className="rounded overflow-hidden shadow-start" id="cardbox">
            <div className="absolute -mt-20 w-full flex justify-center" id="cardboxtop">
                <div className="h-32 w-32">
                    <img src="/images/Ansaf.jpeg" className="rounded-full object-cover h-full w-full shadow-md" height="50" id="ansaf"></img>
                </div>
            </div>
            <div className="px-6 mt-16" id="cardcontent">
                <h1 className="font-bold text-3xl text-center  mt-5 mb-1">Ansaf Hassan</h1>
                <p className="text-800 text-sm text-center" id="status">3rd Year CS Student</p>
                <p className="text-center text-600 text-base pt-3 font-normal">
                    Hey, I'm a Programmer / Web-Developer / DSA Enthusiast. I've always loved being able to solve problems in the most efficient way, however long it takes. Competitive programming is my bread and butter. Welcome to my portfolio, where I'll be documenting every single project of mine.
                </p>
                <div className="w-full flex justify-center pt-5 pb-5 social">
                    <a href="https://www.linkedin.com/in/ansaf-hassan-aa6399270/" target="_blank" className="mx-5">                
                        <img src="/images/linkedin.svg" width="25" height="25">
                            </img>              
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
</div>


  )


}
  

    




export default Bigcard;