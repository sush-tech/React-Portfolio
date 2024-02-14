//Imports
import React from "react";
import "./About.css";
import mypic from "../../../images/mypic.jpg";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          image={mypic}
          alt="About Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
       
        <p id="p-about">
        Full-stack developer skilled in delivering robust and scalable applications using a 
multitude of tools and languages. Highly collaborative with a proven ability to work 
effectively in dynamic and diverse teams to achieve shared goals. Currently seeking a role 
to acquire new knowledge and skills to further expand expertise in software development 
through continuous learning and professional opportunities.
        </p>
       
        
      </div>
    </>
  );
}
