import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import * as Icon from 'react-bootstrap-icons';
import homeLogo from "../../Assets/home-main.svg";
import Typing from "./typing";
function Home()
{
    return(
     
            <container class="home-content">
                <div class="row  m-0">
                <div class="col-md-7 title-content flex-grow-1">
                    <h1>Hi There!</h1>
                    <h1><strong> I'M KHAIRUL AZMAN</strong></h1>
                    <h1><strong><Typing/></strong></h1>
                    </div>
                <div class="col-md-5">
                <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
                </div>
                </div>
            </container>     
    )
}
export default Home;