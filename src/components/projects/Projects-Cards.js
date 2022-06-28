import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

import * as Icon from 'react-bootstrap-icons';
import './projects.css'
function ProjectCards(props) {
  return (
    // <Card className="project-card-view">
    //   {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text style={{ textAlign: "justify" }}>
    //       {props.description}
    //     </Card.Text>
    //     <Button variant="primary" href={props.link} target="_blank">
    //       <BiLinkExternal /> &nbsp;
    //       {props.isBlog ? "View Blog" : "View Project"}
    //     </Button>
    //   </Card.Body>
    // </Card>
    <div class="card h-100 mb-50 card-class-project">
        <div class="container d-flex card-title">
            <h5>{props.title}</h5>
            <div class="component-name">
                <h6>{props.techs}</h6>
            </div>
        </div>
        <div class="container ">
            <p>
               {props.description}
                           </p>
        </div>
        <div class="card-footer mt-auto footer-class-cards">
           <h5 class="text-center"><Icon.Github/></h5>
        </div>
    </div>
  );
}
export default ProjectCards;
