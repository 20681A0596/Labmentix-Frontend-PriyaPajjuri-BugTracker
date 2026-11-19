
/*
function IssueCard({ issue }) {
    return (
        <div className="card">
            <h3>{issue.title}</h3>

            <p>
                Priority:
                <span
                    className={`priority priority-${issue.priority.toLowerCase()}`}
                >
          {issue.priority}
        </span>
            </p>

            <p>
                Status:
                <span
                    className={`status ${
                        issue.status === "IN_PROGRESS"
                            ? "status-progress"
                            : `status-${issue.status.toLowerCase()}`
                    }`}
                >
          {issue.status}
        </span>
            </p>
        </div>
    );
}

export default IssueCard;*/
function IssueCard({
                       issue,
                       onDelete,
                       onEdit
                   }) {

    return (

        <div className="card">

            <h3>
                {issue.title}
            </h3>

            <p>
                Priority:
                <span
                    className={`priority priority-${issue.priority.toLowerCase()}`}
                >
                    {issue.priority}
                </span>
            </p>

            <p>
                Status:
                <span>
                    {issue.status}
                </span>
            </p>

            <div className="issue-actions">

                <button
                    className="edit-btn"
                    onClick={() =>
                        onEdit(issue)
                    }
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() =>
                        onDelete(issue.id)
                    }
                >
                    Delete
                </button>

            </div>

        </div>

    );
}

export default IssueCard;