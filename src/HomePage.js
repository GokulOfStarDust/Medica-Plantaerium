import React from "react";
import BGimage from './images/HomePageBG.png'
import './HomePage.css';
import ThreeDScene from "./HomePage3Dmodel";

const HomePage = () => {
    return(
        <div className="HomePage">
            <div className="titleDiv">
                <p className="title">PLANT-O-PEDIA</p>
                <p className="titleCaption">An initiative by Ministry of Ayush</p>
            </div>
            <img className="BackgroundImage" src={BGimage} alt="Background"/>
            <div className="centerModel">
                <ThreeDScene/>
            </div>
        </div>
    )
}

export default HomePage;