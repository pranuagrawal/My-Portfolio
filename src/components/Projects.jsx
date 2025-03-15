import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Library Management System",
    date: "Jan 2024",
    description: [
      "Developed Libraray Management System using Technologies: Java, Spring Boot, MySQL.",
      `I developed a Library Management System using Java, Spring Boot, and MySQL, enabling efficient book management and user access control.
       It supports CRUD operations for managing books and features role-based access control, allowing admins to modify records while users have read-only access.
       Spring Security ensures authentication and authorization,
       while MySQL handles secure data storage and retrieval.`    ]
  },
  {
    title: "Tic Tac Toe Game",
    date: "Feb 2024",
    description: [
      `I developed a Tic-Tac-Toe game using HTML, CSS, and JavaScript, featuring interactive two-player gameplay.
       It includes score tracking with LocalStorage, ensuring scores persist across sessions. Additional features like Reset,
       Play Again, and AutoPlay enhance replayability.
       The game has a two-page structure with a Home page and a Game interface for smooth navigation.` 
   ]
  },
  {
    title: " Employee Management System",
    date: "Nov 2024",
    description: [
      `I developed an employee search system using Java, JDBC, and MySQL, enabling fast retrieval, addition, updating, and deletion of employee data.
       The optimized search functionality reduced query times to under three seconds, improving accessibility and user experience.` 
       ]
  },
  {
    title: "E-Learning Platform",
    date: "May 2024",
    description: [
      `I developed an E-Learning Platform using HTML, CSS, JavaScript, PHP, and MySQL, featuring an admin module for efficient user management and video uploads.
       It streamlined the creation of 150+ admin accounts and optimized playlist organization, enhancing platform usability.`
    ]
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p className="date">{project.date}</p>
            <ul>
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
