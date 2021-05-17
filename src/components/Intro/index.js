import React from 'react';
import profilePic from '../../img/Profile_pic.jpg'

function Intro() {
    return (
        <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am Chinedu <strong>Chukwuani</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Full Stack dev</p>
        <img src={profilePic} alt="Chinedu smiling" className="intro__img"/>
    </section>
    );
}

export default Intro;