import React from "react";
import "./CSS/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About E-Note</h1>
        <p>
          Welcome to <strong>E-Note</strong> my very first full stack MERN project! 
          This app is learned from official documentations, youtube tutorials and some ai as a hands-on way to understand how frontend and backend 
          connect together using <strong>MongoDB</strong>, <strong>Express</strong>, 
          <strong>React</strong>, and <strong>Node.js</strong>.
        </p>

        <p>
          The goal of this project was to create something <strong>simple, clean, 
          and functional</strong>. You can add, update, and delete notes easily 
          all while your data is safely stored in the backend.
        </p>

        <p>
          I’m still <strong>learning and improving</strong> every day, 
          exploring better design patterns, responsive layouts, and more 
          advanced React techniques. This project represents my starting point
          and I’m proud of how much I’ve learned already.
        </p>

        <p>
          Thank you for checking it out!  
          <em> Built with passion and curiosity.</em>
        </p>
      </div>
    </div>
  );
};

export default About;
