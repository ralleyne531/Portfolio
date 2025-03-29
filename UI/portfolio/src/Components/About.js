import React from "react";
import image from "../img/temp_image.jpg"

function About(){

    return <>
        <h2>About Me</h2>
        <img src={image} alt={"Smiley face with thumbs up, temporary"}/>
        <p>Growing up alongside emerging technology led my curiosity to the world of computing. I enjoy designing web applications and engineering design systems. I envision sustainable, aesthetic solutions that provide users satisfaction and accessible value.</p>
    </>

}

export default About;