import React from "react";
import { useState } from "react";
import { ProjectsData } from "../data/ProjectsData";
import ProjectModal from "./ProjectModal";
import './Projects.css';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="projects">
            <h2 className="projects-title">프로젝트</h2>

            <div className="projects-list">
                {ProjectsData.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        onClick={() => setSelectedProject(project)}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        
                    </div>
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    )
}