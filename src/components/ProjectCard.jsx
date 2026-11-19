/*function ProjectCard({ project }) {

    return (
        <div className="project-card">

            <h2>{project.projectName}</h2>

            <p>
                <strong>Description:</strong>
                {" "}
                {project.description}
            </p>

            <p>
                <strong>Status:</strong>
                {" "}
                {project.status}
            </p>

            <div className="project-actions">

                <button className="edit-btn">
                    Edit
                </button>

                <button className="delete-btn">
                    Delete
                </button>

            </div>

        </div>
    );
}

export default ProjectCard;*/
function ProjectCard({
                         project,
                         onDelete,
                         onEdit
                     }) {

    return (
        <div className="project-card">

            <h2>
                {project.projectName}
            </h2>

            <p>
                <strong>Description:</strong>
                {" "}
                {project.description}
            </p>

            <p>
                <strong>Status:</strong>
                {" "}
                {project.status}
            </p>

            <div className="project-actions">

                <button
                    className="edit-btn"
                onClick={()=> onEdit(project)}
                    >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() =>
                        onDelete(project.id)
                    }
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default ProjectCard;