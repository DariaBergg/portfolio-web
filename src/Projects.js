import React from "react";
import Footer from "./Footer";
import weatherWebImage from './pics/weather-web.png'
import TaskManagerWebImage from './pics/task-manager-web.png'
import foodeliveryWebImage from './pics/foodelivery-web.jpg'

function Projects() {
    return (
      <>
        <div className="projects-page">
          <h1>Projects</h1>
          <h3>Delivery App</h3>
          <div className="projects-box">
          <div className="left">
             <img src={foodeliveryWebImage} alt="foodelivery-web-pic"/>
          </div>
          <div className="right">
              <h4>Description</h4>
              <p>This website is a demo version of delivery application. Providing options for ordering food and drinks. Usage of mapy.cz API helps  precise address location. </p>
              <a href="https://dariabergg.github.io/foodelivery/#/" target="_blank">link</a>
          </div>
          </div>
          <h3>Weather Forecast</h3>
          <div className="projects-box">
          <div className="left">
             <img src={weatherWebImage} alt="weather-web-pic"/>
          </div>
          <div className="right">
              <h4>Description</h4>
              <p>This website is a demo version of simple weather forecast application. It provides users with current weather conditions and other weather-related information for a specified location at this point in time. 
                Users can input their desired location to receive accurate weather predictions. It's a useful tool for planning outdoor activities, travel, 
                or simply staying informed about weather conditions in different areas.</p>
              <a href="https://dariabergg.github.io/weather-forecast/" target="_blank">link</a>
          </div>
          </div>
          <h3>Task Manager</h3>
          <div className="projects-box">
          <div className="left">
             <img src={TaskManagerWebImage} alt="taskManager-web-pic"/>
          </div>
          <div className="right">
              <h4>Description</h4>
              <p>This website is a demo version of task manager tool application.  It helps users organize and manage their tasks by providing features such as creating tasks, categorizing tasks by statuses. Task manager apps are commonly used for personal productivity, project management, and team coordination.</p>
              <a href="https://dariabergg.github.io/task-manager/" target="_blank">link</a>
          </div>
          </div>
        </div>
        <Footer />
       </>
    );
  }
  
  export default Projects;
  