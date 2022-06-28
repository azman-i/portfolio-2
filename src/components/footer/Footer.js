import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"
import * as Icon from 'react-bootstrap-icons';
function Footer()
{
   return( 
     <div class="container-fluid footer-class">
       <div class="row row-class">
          <div class="col-md-4 text-center">
            Designed and Developed by Khairul Azman
            </div> 
            <div class="col-md-4 justify-content-center">
              {/* <div class="about-links"> */}
              {/* <div class="text-center">Feel free to connect with me</div> */}
              <div class="d-flex justify-content-center">
                <ul class="d-flex list-unstyled justify-content-between">
                <li class="list-align-items"><Icon.Github/></li>
                <li class="list-align-items"><Icon.Facebook/></li>
                <li class="list-align-items"><Icon.Linkedin/></li>
                </ul>
               {/* <div class="justify-content-center">
                 <ul class="list-un d-flex" >
            <li class="list-align-items">
              <a
                href="https://github.com/soumyajit4419"
                
                target="_blank" 
                rel="noopener noreferrer"
              >
                hello
              </a>
            </li>
            <li  class="list-align-items" >
              <a
                href="https://twitter.com/Soumyajit4419"
                
                target="_blank" 
                rel="noopener noreferrer"
              >
              hello
              </a>
            </li>
            </ul>  */}
            </div>
            </div>
             </div>  
       </div>
     
//    <footer class="text-center text-white" style="background-color: #f1f1f1;">
 
//   <div class="container pt-4">
  
//     <section class="mb-4">
      
//       <a
//         class="btn btn-link btn-floating btn-lg text-dark m-1"
//         href="#!"
//         role="button"
//         data-mdb-ripple-color="dark"
//         ><i class="fab fa-facebook-f"></i
//       ></a>

      
//       <a
//         class="btn btn-link btn-floating btn-lg text-dark m-1"
//         href="#!"
//         role="button"
//         data-mdb-ripple-color="dark"
//         ><i class="fab fa-twitter"></i
//       ></a>

      
//       <a
//         class="btn btn-link btn-floating btn-lg text-dark m-1"
//         href="#!"
//         role="button"
//         data-mdb-ripple-color="dark"
//         ><i class="fab fa-google"></i
//       ></a>

      
//       <a
//         class="btn btn-link btn-floating btn-lg text-dark m-1"
//         href="#!"
//         role="button"
//         data-mdb-ripple-color="dark"
//         ><i class="fab fa-instagram"></i
//       ></a>

      
//       <a
//         class="btn btn-link btn-floating btn-lg text-dark m-1"
//         href="#!"
//         role="button"
//         data-mdb-ripple-color="dark"
//         ><i class="fab fa-linkedin"></i
//       ></a>
      
//       <a
//         class="btn btn-link btn-floating btn-lg text-dark m-1"
//         href="#!"
//         role="button"
//         data-mdb-ripple-color="dark"
//         ><i class="fab fa-github"></i
//       ></a>
//     </section>
    
//   </div>
  

  
//   <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
//     © 2020 Copyright:
//     <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
//   </div>
  
// </footer>
)
}
export default Footer;