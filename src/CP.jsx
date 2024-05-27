import React from "react"
import CPdetails from "./CPdetails"




function CP(){
  return <div className="CP">
    <h1 className="font text-3xl" id="CPHeading"> Competitive Programming </h1>

    <div className="cardandcont">

    <div className="CPcard">
    <a href="https://leetcode.com/u/themookiecan/" target="_blank"><p><span className="tbc">LEETCODE</span></p></a>
    <a href="https://codeforces.com/profile/ansaafff" target="_blank" ><p><span className="tbc">CODEFORCES</span></p></a>
    <a href="https://www.codechef.com/users/mookiecan" target="_blank"><p><span className="tbc">CODECHEF</span></p></a>
    <a href="https://www.stopstalk.com/user/profile/ansaafff" target="_blank"><p><span className="tbc">STOPSTALK</span></p></a>
    </div>

    <div className="description">
      <p className="font text-3l" id="codecontent">
    During my 2023 winter vacation, I spent a significant amount of time on LeetCode, tackling high-level questions across 
    a wide range of topics. In the summer of 2024, I transitioned to Codeforces, where I encountered practical, logic-based 
    problems that demanded not only high-level programming skills, but also a solid understanding of both basic and advanced mathematical 
    concepts picked up over the years.
    </p>
    </div>
    </div>

  </div>

  

}

export default CP;