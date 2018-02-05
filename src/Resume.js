import React from 'react';
import './Resume.css';

function Resume(){
    return(
      <div className="myResume">
        <div className="headOfResume">
          <h1>Bisceanu Daniel</h1>
          <p> 7 st Francis Gardens </p>
          <p> Crawley, United Kingdom </p>
        </div>
        <div className="content">
          <div className="skills">
            <h3>Skills</h3>
            <h6>Analytical</h6>
            <p>I can analyse any code and the conclusion is the same: I have no idea what is over there</p>
            <h6>Design</h6>
            <p>I can have design opinions without knowing any design</p>
            <h6>Mathematic</h6>
            <p>Once I calculated how much time I spend programming my hole life</p>
            <h6>Self-Motivation</h6>
            <p>Never been more motivated to finish my CV then I am right now</p>
            <h6>Perseveration</h6>
            <p>My mom told me to behave nice and stop being a comediant. This CV is the result of my perseveration</p>
            <h6>Out of the box</h6>
            <p>I have been told before that I will never become a good doctor so I became an engineer...still not a good one</p>
            <h6>Easy going</h6>
            <p>Just tell me you can teach me some mad programming skills and I am down for that!</p>
          </div>

          <div className="workexperience">
          <h3>Work Experience</h3>
            <p>Well...</p>
            <img src="images/eanna.jpg"  alt="My band"/>
            <p>I have been a metal band manager and events organiser</p>
            <img src="images/hostel.jpg" alt="My hostel"/>
            <p>I also worked at a Hostel</p>
            <h6>My programming experience it is like this:</h6>
            <ul>
              <li>2014 Summer Internship at Graffino where I learned about web design and my first steps into web development</li>
              <li>2015 Summer Internship at NTT Data where I first meet js and the jQuerry</li>
              <li>2016 Working at some personal projects and learning all I could from codeacademy,udacity,etc</li>
              <li>2017 Start the code institute course which I still follow</li>
            </ul>
            <p>In 2016 I participated at the iQuest drunking programming contest and also at Innovation Labs</p>
            <img src="images/innovation.jpg" alt="Nice novice programmers"/>
            <p>And this is a part of my work <a href="https://github.com/DaniBis">My GitHub </a></p>
          </div>

          <div className="education">
          <h3>Education</h3>
            <h6>Highschool</h6>
              <p> I finished Mircea cel Batran Highschool from Valcea, section Mathematics-Informatics </p>
              <p> I have a certificate as programming assistant </p>
            <h6>College</h6>
              <p> I finished the Lucian Blaga University of Sibiu, Engineering College </p>
              <p> Because I was very curious how internet works I have completed the CCNA 1,2,3 and 4 from Cisco </p>
              <p> I also have a bachelors degree in Computer Science </p>
          </div>

        </div>
      </div>
    );
}

export default Resume;
