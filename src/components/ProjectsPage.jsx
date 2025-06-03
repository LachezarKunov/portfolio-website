import React from "react";
import "./ProjectsPage.css";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import CardContainer from "./CardContainer";
import { projects as allProjects } from "../data/projects";

function ProjectsPage() {
  const projects = {
    cpp: allProjects.filter((p) => p.category === "c++"),
    web: allProjects.filter((p) => p.category === "html-css-js"),
    fullstack: allProjects.filter(
      (p) =>
        p.category === "react" ||
        p.category === "express" ||
        p.category === "fullstack"
    ),
  };

  return (
    <>
      <h1>Personal Projects</h1>

      <SectionTitle
        imgSrc="/assets/react-express-logo.png"
        title="Projects"
      ></SectionTitle>

      <p className="technology-paragraph">
        React and Express are my favorite technologies. I studied them as part
        of the Web Technologies course at FMI, and also learned independently
        through self-study and Udemy courses.
      </p>

      <CardContainer>
        {projects.fullstack.map((project, index) => {
          return (
            <ProjectCard key={index} {...project} index={index}></ProjectCard>
          );
        })}
      </CardContainer>

      <SectionTitle
        imgSrc="/assets/cpp-logo.png"
        title="Projects"
      ></SectionTitle>

      <p className="technology-paragraph">
        I appreciate C++ for its speed and efficient memory management. Starting
        at university, I gained a deep understanding of its core principles and
        advanced features. This strong foundation not only allows me to handle
        complex projects but also broadens my understanding of concepts in other
        programming languages.
      </p>

      <CardContainer>
        {projects.cpp.map((project, index) => {
          return (
            <ProjectCard key={index} {...project} index={index}></ProjectCard>
          );
        })}
      </CardContainer>

      <SectionTitle
        imgSrc="/assets/htmlcssjs-logo.png"
        title="Projects"
      ></SectionTitle>

      <p className="technology-paragraph">
        Working with HTML, CSS, and JavaScript has shaped my web development
        skills and fueled my passion for building websites. These core
        technologies provided a solid foundation that helped me understand
        React’s component-based structure and dynamic behavior.
      </p>

      <CardContainer>
        {projects.web.map((project, index) => {
          return (
            <ProjectCard key={index} {...project} index={index}></ProjectCard>
          );
        })}
      </CardContainer>
    </>
  );
}

export default ProjectsPage;
