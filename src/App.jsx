import React from "react";
import Navbar from "./Navbar";
import Bigcard from "./Bigcard";
import StudyCard from "./StudyCard";
import CP from "./CP";
import SkillBox from "./SkillBox"
import Footer from "./Footer"



function App(){
  return(
    <div>
      <Navbar />
      <Bigcard />
      <StudyCard />
      <CP />
      <SkillBox />
      <Footer />
    </div>
  )
}

export default App;