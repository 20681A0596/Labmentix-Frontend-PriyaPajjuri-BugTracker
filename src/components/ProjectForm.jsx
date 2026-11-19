/*import { useState } from "react";
function ProjectForm({addProject}) {

    const [project, setProject] = useState({
        projectName: "",
        description: "",
        status: "ACTIVE"
    });

    const submitProject = (e) => {

        e.preventDefault();

         addProject(project);

        setProject({
            projectName: "",
            description: "",
            status: "ACTIVE"
        });
    };

    return (

        <form
            className="form"
            onSubmit={submitProject}
        >

            <input
                value={project.projectName}
                placeholder="Project Name"
                onChange={(e) =>
                    setProject({
                        ...project,
                        projectName: e.target.value
                    })
                }
            />

            <textarea
                value={project.description}
                placeholder="Description"
                onChange={(e) =>
                    setProject({
                        ...project,
                        description: e.target.value
                    })
                }
            />

            <select
                value={project.status}
                onChange={(e) =>
                    setProject({
                        ...project,
                        status: e.target.value
                    })
                }
            >
                <option>ACTIVE</option>
                <option>COMPLETED</option>
            </select>

            <button type="submit">
                Save Project
            </button>

        </form>

    );
}

export default ProjectForm;*/

import { useState } from "react";

function ProjectForm({ addProject }) {

    const [project, setProject] = useState({
        projectName: "",
        description: "",
        status: "ACTIVE"
    });

    const submitProject = (e) => {

        e.preventDefault();

        addProject(project);

        setProject({
            projectName: "",
            description: "",
            status: "ACTIVE"
        });
    };

    return (
        <form
            className="form"
            onSubmit={submitProject}
        >

            <input
                value={project.projectName}
                placeholder="Project Name"
                onChange={(e) =>
                    setProject({
                        ...project,
                        projectName: e.target.value
                    })
                }
            />

            <textarea
                value={project.description}
                placeholder="Description"
                onChange={(e) =>
                    setProject({
                        ...project,
                        description: e.target.value
                    })
                }
            />

            <select
                value={project.status}
                onChange={(e) =>
                    setProject({
                        ...project,
                        status: e.target.value
                    })
                }
            >
                <option value="ACTIVE">ACTIVE</option>
                <option value="COMPLETED">COMPLETED</option>
            </select>

            <button type="submit">
                Save Project
            </button>

        </form>
    );
}

export default ProjectForm;