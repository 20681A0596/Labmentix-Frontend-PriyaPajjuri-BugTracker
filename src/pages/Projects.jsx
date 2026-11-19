/*import { useState } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";

function Projects() {

    const [projects, setProjects] = useState([]);

    const addProject = (project) => {
        setProjects([
            ...projects,
            {
                id: Date.now(),
                ...project
            }
        ]);
    };

    return (
        <Layout>

            <div className="projects-container">

                <h1 className="projects-title">
                    Projects Management
                </h1>

                <div className="projects-form-section">

                    <ProjectForm
                        addProject={addProject}
                    />

                </div>

                <div className="projects-list">

                    {projects.length === 0 ? (
                        projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))
                    ) : (
                        <div className="empty-projects">
                            No Projects Available
                        </div>
                    )}

                </div>

            </div>

        </Layout>
    );
}

export default Projects;*/

/*
import { useState } from "react";
import Layout from "../components/Layout";
import ProjectForm from "../components/ProjectForm";
import ProjectCard from "../components/ProjectCard";

function Projects() {

    const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("projects")) ||[]);


    const addProject = (project) => {

            setProjects(prevProjects => [
                ...prevProjects,
                {
                    id: Date.now(),
                    ...project
                }
            ]);
        };


    const deleteProject = (id) => {

        setProjects(
            projects.filter(
                project => project.id !== id
            )
        );

    };

    return (
        <Layout>

            <div className="projects-container">

                <h1 className="projects-title">
                    Projects Management
                </h1>

                <ProjectForm
                    addProject={addProject}
                />

                <div className="projects-list">

                    {projects.length === 0 ? (

                        <div className="empty-projects">
                            No Projects Available
                        </div>

                    ) : (

                        projects.map((project) => (

                            <ProjectCard
                                key={project.id}
                                project={project}
                                onDelete={deleteProject}
                            />

                        ))

                    )}

                </div>

            </div>

        </Layout>
    );
}

export default Projects;*/

import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ProjectForm from "../components/ProjectForm";
import ProjectCard from "../components/ProjectCard";

function Projects() {

   /* const [projects, setProjects] = useState([]);

    useEffect(() => {
        const savedProjects =
            JSON.parse(localStorage.getItem("projects")) || [];

        setProjects(savedProjects);
    }, []);*/
    const [projects, setProjects] = useState(() => {

        try {
            return JSON.parse(
                localStorage.getItem("projects") || "[]"
            );
        } catch {
            return [];
        }

    });

    const addProject = (project) => {

        const updatedProjects = [
            ...projects,
            {
                id: Date.now(),
                ...project
            }
        ];

        setProjects(updatedProjects);

        localStorage.setItem(
            "projects",
            JSON.stringify(updatedProjects)
        );
    };
        const deleteProject = (id) => {

            const updatedProjects =
                projects.filter(
                    project =>
                        project.id !== id
                );

            setProjects(updatedProjects);

            localStorage.setItem(
                "projects",
                JSON.stringify(updatedProjects)
            );
        };
    const editProject = (project) => {

        const newName = prompt(
            "Enter New Project Name",
            project.projectName
        );

        if (!newName) return;

        const updatedProjects =
            projects.map((p) =>

                p.id === project.id
                    ? {
                        ...p,
                        projectName: newName
                    }
                    : p

            );

        setProjects(updatedProjects);

        localStorage.setItem(
            "projects",
            JSON.stringify(updatedProjects)
        );

    };

    return (
        <Layout>

            <h1>Projects Management</h1>

            <ProjectForm addProject={addProject} />

            <div className="projects-list">

                {projects.length === 0 ? (
                    <div className="empty-projects">
                        No Projects Available
                    </div>
                ) : (
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onDelete={deleteProject}
                            onEdit={editProject}
                        />
                    ))
                )}

            </div>

        </Layout>
    );
}

export default Projects;