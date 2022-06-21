import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "deep-thoughts",
      link: "https://ancient-reaches-24707.herokuapp.com/",
      repo: "https://github.com/kelseyalderman/deep-thoughts.git",
    },
    {
      name: "budget-tracker",
      link: "https://whispering-retreat-47985.herokuapp.com/",
      repo: "https://github.com/kelseyalderman/budget-tracker.git",
    },
    {
      name: "study-buddy",
      link: "https://afternoon-refuge-77491.herokuapp.com/",
      repo: "https://github.com/kelseyalderman/GroupProject2-StudyBuddy.git",
    },
    {
      name: "tech-blog",
      link: "https://quiet-chamber-59067.herokuapp.com/",
      repo: "https://github.com/kelseyalderman/tech-blog.git",
    },
    {
      name: "note-taker",
      link: "https://sheltered-ocean-25630.herokuapp.com/",
      repo: "https://github.com/kelseyalderman/note-taker.git",
    },
    {
      name: "perfect-night-out",
      link: "https://kelseyalderman.github.io/Group-Project-1/",
      repo: "https://github.com/kelseyalderman/Group-Project-1.git",
    },
    {
      name: "weather-dashboard",
      link: "https://kelseyalderman.github.io/weather-dashboard/",
      repo: "https://github.com/kelseyalderman/weather-dashboard.git",
    },
    {
      name: "work-day-scheduler",
      link: "https://kelseyalderman.github.io/work-day-scheduler/",
      repo: "https://github.com/kelseyalderman/work-day-scheduler.git",
    },
    {
      name: "code-quiz",
      link: "https://kelseyalderman.github.io/code-quiz/",
      repo: "https://github.com/kelseyalderman/code-quiz.git",
    },
    {
      name: "run-buddy",
      link: "https://kelseyalderman.github.io/run-buddy/",
      repo: "https://github.com/kelseyalderman/run-buddy.git",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
