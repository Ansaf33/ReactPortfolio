import React from "react"


function Footer(){
  return(
    <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
   

    <div class="col mb-3">

    </div>

    <div id="footercontents">

      <ul class="nav" id="footcontact">
        <li class="nav-item mb-3"><img src="/images/phone.svg" width="30px" id="icons"></img><p>+91 903 703 3219</p></li>
        <li class="nav-item mb-2"><img src="/images/email.svg" width="30px" id="icons"></img><p>iansaf600@gmail.com</p></li>
        <li class="nav-item mb-2"><img src="/images/discord.svg" width="30px" id="icons"></img><p>notansaf3422</p></li>
        <li class="nav-item mb-2"><img src="/images/github.svg" width="30px"></img><a href="https://github.com/Ansaf33" target="_blank">Github</a></li>
        <li class="nav-item mb-2"><img src="/images/instagram.svg" width="30px"></img><a href="https://www.instagram.com/ansaf_no_one/" target="_blank">Instagram</a></li>
        <li class="nav-item mb-2"><img src="/images/facebook.svg" width="30px"></img><a href="https://www.facebook.com/ansaf.hassan.94/" target="_blank">Facebook</a></li>


      </ul>
    </div>
   
  </footer>
</div>

  )
}

export default Footer;
