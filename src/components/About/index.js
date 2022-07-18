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
          <p>I'm a Full Stack Developer based in Portland, Oregon.</p>
        </div>
      </div>

      <div id="about-me" className="about">
        <div className="flex-row">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="flex-row">
          <p>
            Full Stack Web Developer with a passion for building and optimizing
            user-focused applications. Leveraging extensive background in
            operations, management, and performance development to find
            innovative solutions, collaborate with teams, and execute agile
            projects. Analytical, detailed-oriented, and motivated to deliver
            high-quality products with proficiency. Received a certificate in
            Full Stack Web Development through the University of Oregon.
            Technical skills include HTML, CSS, Bootstrap, Javascript, MySQL,
            Sequelize, GraphQL, and MERN stack. Experience in designing,
            planning, and building full stack applications as well as front-end
            and back-end optimization.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
