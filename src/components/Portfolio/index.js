import React, { useState } from "react";
import ProjectList from "../ProjectList";

function Portfolio() {
  //   const [projects] = useState([
  const projects = [
    {
      title: "Budget tracker",
      image: "Budget-Tracker.png",
      repo: "https://github.com/tarekyou/trackbudget",
      deployed: "https://boiling-scrubland-45534.herokuapp.com/",
    },
    {
      title: "Note taker",
      image: "Note-Taker.png",
      repo: "https://github.com/tarekyou/note-taker",
      deployed: "https://protected-beach-90412.herokuapp.com/",
    },
    {
      title: "Password Generator",
      image: "Password-Generator.png",
      repo: "https://github.com/tarekyou/password-generator",
      deployed: "https://tarekyou.github.io/password-generator/",
    },
    {
      title: "Timed Javascript quiz",
      image: "Timed-Javascript-Quiz.png",
      repo: "https://github.com/tarekyou/quiz-challenge",
      deployed: "https://tarekyou.github.io/quiz-challenge/",
    },
    {
      title: "Weather Dashboard",
      image: "Weather-Dashboard.png",
      repo: "https://github.com/tarekyou/weather-dash",
      deployed: "https://tarekyou.github.io/weather-dash/",
    },
    {
      title: "Work day scheduler",
      image: "Work-Day-Scheduler.png",
      repo: "https://github.com/tarekyou/workday-scheduler",
      deployed: "https://tarekyou.github.io/workday-scheduler/",
    },
  ];
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}

export default Portfolio;
