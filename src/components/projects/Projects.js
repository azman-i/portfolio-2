
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./projects.css";
import ProjectCards from'./Projects-Cards';
function Projects()
{
    return(
        <div class="container container-projects">
            <h1 class="text-center h1-class-styling"><strong>SKILLS</strong></h1>
           <div class="row row-margin-add">
               <div class=" col-6 col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       HTML
                   </button>
               </div>
               <div class="col-6  col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       CSS
                   </button>
               </div>
               <div class=" col-6 col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       JAVA
                   </button>
               </div>
               <div class="col-6  col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       C
                   </button>
               </div>
               <div class=" col-6 col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       C++
                   </button>
               </div>
               <div class=" col-6 col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       PYTHON
                   </button>
               </div>
               <div class="col-6  col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       SPRING BOOT
                   </button>
               </div>
               <div class="col-6  col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       REACT JS
                   </button>
               </div>
               <div class="col-6  col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       LATEX
                   </button>
               </div>
               <div class="col-6  col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       SQL
                   </button>
               </div>
               <div class="col-6  col-sm-4 col-md-2">
                   <button class="btn-class-style" disabled>
                       Git
                   </button>
               </div>
           </div>
           <h1 class="text-center mb-5"><strong>PROJECTS</strong></h1>
           <div class="row">
               <div class="col-sm-6 col-md-6 col-lg-4 col-style">
                   <ProjectCards 
                   techs="C,iGraphics"
                   isBlog={false}
                   title="Graph Plotter"
                   description="A graph plotting software using c with iGraphics which can plot almost every graph"
                   link=""
                   />
               </div>
               <div class="col-sm-6 col-md-6 col-lg-4 col-style">
                   <ProjectCards 
                   techs="C"
                   isBlog={false}
                   title="ICMP Smurfing Attack"
                   description="ICMP smurfing attack by spoofing the ip address of the victim's machine and flooding the victim's machine with icmp echo replies which make the victim's machine inaccessible."
                   link=""
                   />
               </div>
               <div class="col-sm-6 col-md-6 col-lg-4 col-style">
                   <ProjectCards 
                   techs="Java,JavaFX, SQL"
                   isBlog={false}
                   title="Messenger"
                   description="A simple messenger desktop application using javafx and mysql,retrieving data from database through
                   mysql and designing frontend with javafx."
                   link=""
                   />
               </div>
               <div class="col-sm-6 col-md-6 col-lg-4 col-style">
                   <ProjectCards 
                   techs="Java,JavaFX, SQL"
                   isBlog={false}
                   title="School Management System"
                   description="Developed a school management system by using java and mysql.It has multiple funcitionalities including common functionalities like add and delete and edit data of
                   students,teachers and admins."
                   link=""
                   />
               </div>
               <div class="col-sm-6 col-md-6 col-lg-4 col-style">
                   <ProjectCards 
                   techs="C++"
                   isBlog={false}
                   title="Race Game"
                   description="It is a hardware project using ATMega32 and gyroscope,led matrix and led display .Conducted by 4 8*8 led matrix
                   Which is basically a race game where object needs to arrive at other end without touching any of the moving
                   obstacles."
                   link=""
                   />
               </div>
               <div class="col-sm-6 col-md-6 col-lg-4 col-style">
                   <ProjectCards 
                   techs="Laravel, PHP, Google Map Api"
                   isBlog={false}
                   title="Park Your Car "
                   description="A parking app with the help of google map api to find some available parking space to park user’s car.And the
                   parking space owner can rent out their space to users in real time scenario."
                   link=""
                   />
               </div>
               <div class="col-sm-6 col-md-6 col-lg-4 col-style">
                   <ProjectCards 
                   techs="MVC pattern, SQL, JMeter, HAproxy"
                   isBlog={false}
                   title="Online Shopping System"
                   description="A secured HTTPS online shopping system with one load balancer powered by haproxy and two application server
                   serving in round robin algorithm to increase availabilty and two databases in the backend database server and using
                   JMeter for load test where users can purchase items and post their items for sell."
                   link=""
                   />
               </div>
           </div>
        </div>
    )
}
export default Projects;