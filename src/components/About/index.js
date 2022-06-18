import React from "react";
import portfolioImage from "../../assets/images/portfolio-image.jpg";

function About() {
  return (
    <section>
      <div className="hero">
        <div className="hero-img">
          <img src={portfolioImage} alt="head shot of Kelsey Alderman" />
        </div>

        <div className="hero-intro">
          <h2>Hi, I'm Kelsey.</h2>
          <p>I'm an aspiring full-stack developer based in Portland, Oregon.</p>
        </div>
      </div>

      <div id="about-me" className="about">
        <div className="flex-row">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="flex-row">
          <p>
            I am currently a student in a full-stack coding bootcamp at the
            University of Oregon. I have worked in management and operations for
            the past 10 years, but decided to dive into coding after completing
            an introductory course offered by SheCodes. I have a bachelor's
            degree in psychology from Portland State University and a master's
            degree in performance psychology from University of Western States.
            I love the fast-pace, challenge, and opportunity for ongoing
            learning that coding provides and cannot wait to get started in the
            field!
          </p>
        </div>
      </div>
    </section>
    // <section className="my-5">
    //   <h1 id="about">Hi, I'm Kelsey.</h1>
    //   <img
    //     src={portfolioImage}
    //     className="my-2"
    //     style={{ width: "50%" }}
    //     alt="headshot"
    //   />
    // </section>
  );
}

export default About;
