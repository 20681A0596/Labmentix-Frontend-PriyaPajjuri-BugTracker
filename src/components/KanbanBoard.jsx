/*
function KanbanBoard() {

    const todoIssues =
        issues.filter(
            issue => issue.status === "TO_DO"
        );

    const inProgressIssues =
        issues.filter(
            issue => issue.status === "IN_PROGRESS"
        );

    const doneIssues =
        issues.filter(
            issue => issue.status === "DONE"
        );

    return (

        <div
            style={{
                display:"grid",
                gridTemplateColumns:
                    "repeat(4,1fr)",
                gap:"20px"
            }}
        >


            <div className="card">
                <h3>ToDo</h3>
            </div>

            <div className="card">
                <h3>InProgress</h3>
            </div>



            <div className="card">
                <h3>Done</h3>
            </div>

        </div>

    )

}

export default KanbanBoard;

 */
function KanbanBoard() {

    const issues =
        JSON.parse(
            localStorage.getItem("issues")
        ) || [];

    const todoIssues =
        issues.filter(
            issue =>
                issue.status === "TO_DO"
        );

    const inProgressIssues =
        issues.filter(
            issue =>
                issue.status === "IN_PROGRESS"
        );

    const doneIssues =
        issues.filter(
            issue =>
                issue.status === "DONE"
        );

    return (

        <div className="kanban-board">

            {/* TO DO */}

            <div className="kanban-column">

                <h3 className="todo-header">TO DO</h3>

                {
                    todoIssues.length === 0
                        ? <p>No Issues</p>
                        : todoIssues.map(issue => (

                            <div
                                key={issue.id}
                                className="issue-card"
                            >

                                <h4>
                                    {issue.title}
                                </h4>

                                <p>
                                    Priority:
                                    {" "}
                                    {issue.priority}
                                </p>

                            </div>

                        ))
                }

            </div>

            {/* IN PROGRESS */}

            <div className="kanban-column">

                <h3 className="progress-header">
                    IN PROGRESS
                </h3>

                {
                    inProgressIssues.length === 0
                        ? <p>No Issues</p>
                        : inProgressIssues.map(issue => (

                            <div
                                key={issue.id}
                                className="issue-card"
                            >

                                <h4>
                                    {issue.title}
                                </h4>

                                <p>
                                    Priority:
                                    {" "}
                                    {issue.priority}
                                </p>

                            </div>

                        ))
                }

            </div>

            {/* DONE */}

            <div className="kanban-column">

                <h3 className=" done-header">DONE</h3>

                {
                    doneIssues.length === 0
                        ? <p>No Issues</p>
                        : doneIssues.map(issue => (

                            <div
                                key={issue.id}
                                className="issue-card"
                            >

                                <h4>
                                    {issue.title}
                                </h4>

                                <p>
                                    Priority:
                                    {" "}
                                    {issue.priority}
                                </p>

                            </div>

                        ))
                }

            </div>

        </div>

    );
}

export default KanbanBoard;