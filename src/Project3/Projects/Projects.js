import React from "react";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal portfolio website built with React.",
    },
    {
      id: 2,
      title: "React Todo App",
      description:
        "A simple todo application using React and state management.",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projectsData.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
