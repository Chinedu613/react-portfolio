import React from 'react';
import benchPhoto from './../../img/sitting-on-bench.jpg';
import resume from './../../img/Chin_Chukwuani_Resume.pdf' 

function AboutMe() {
    return (
        <section className="about-me" id="about">
           <h2 className="section__title section__title--about">Who I am</h2>
           <p className="section__subtitle section__subtitle--about">Full Stack Developer based out of Philadelphia</p>
           
           <div className="about-me__body">
               <p>My name is Chinedu Chukwuani, I am a Full Stack Developer based out of the Philadelphia area. I love exploring the many different ways of using computer programs to solve problems or make and lives easier. There is always something new to learn! </p>
               <p>The programming languages I have experience in are Html CSS, SQL, NoSQL, and my favorite Javascript!</p>
               <p>Frameworks I work with is Reactjs and Nodejs.</p>
               <p>Resume: <a href="https://docs.google.com/document/d/1CNQ7hpHfhO0MJO85PTDzo7F5v-LN8EYFojvo5LRfYI0/edit?usp=sharing" alt="takes you to Resume on GoogleDocs" className="about-me__resume-link">View</a> | <a href={resume} alt="Download Resume" className="about-me__resume-link"download="Chinedu_Chukwuani_Resume">Download</a></p> 
           </div>
           
           <img src={benchPhoto} alt="Chinedu sitting on park bench" className="about-me__img"/>
        </section>
    );
}

export default AboutMe;
