import React from "react";
import ProjectsComponent from "../../components/ProjectsComponent";
import Note from "../../img/note.png";
import Weather from "../../img/weather.png";
import UserDirectory from "../../img/user.png";
import Quiz from "../../img/quiz.png";
import budgetTrack from "../../img/budget.png";
import fitnessTrack from "../../img/fitness-track.png";
import "./style.css";

function Projects() {
  const ProjectsList = [
    {
      title: "fitness track",
      description:
        "A React app that uses Node, Express, and MongoDB for back-end functionality. The site features admin pages, protected by Passport authentication, that allow an admin to store and update data.",
      image: fitnessTrack,
      github: "https://github.com/derrick1020/fitness-track",
      link: "https://fitnesstrack20.herokuapp.com/",
    },
    {
      title: "Budget",
      description: "A web application for budget managment",
      image: budgetTrack,
      github: "https://github.com/derrick1020/budget",
      link: "https://budgettrack20.herokuapp.com/",
    },
    {
      title: "Code Quiz",
      description: "A simple code quiz",
      image: Quiz,
      github: "https://github.com/derrick1020/code-quiz",
      link: "https://derrick1020.github.io/code-quiz/",
    },
    {
      title: "Note Taker",
      description:
        "This application allows a user to search for local health-oriented businesses based on individual needs and goals",
      image: Note,
      github: "https://github.com/derrick1020/note-taker",
      link: "https://notetaker114.herokuapp.com/",
    },
    {
      title: "Weather Dashboard",
      description:
        "The weather dashboard allows you to search for a city's current weather and five day forecast",
      image: Weather,
      github: "https://github.com/derrick1020/weather",
      link: "https://derrick1020.github.io/weather/",
    },
    {
      title: "User Directory",
      description:
        "The User directory is a React app that generates a table of 40 random users along with their associated information",
      image: UserDirectory,
      github: "https://github.com/derrick1020/user-directory",
      link: "https://derrick1020.github.io/user-directory/",
    },
  ];
  return (
    <div className="projects-container">
      <ProjectsComponent ProjectsList={ProjectsList} />
    </div>
  );
}

export default Projects;
