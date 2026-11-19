import Layout from "../components/Layout";
import KanbanBoard from "../components/KanbanBoard";


function Kanban() {
    return (
        <Layout>
            <div className="kanban-container">

                <h1 className="kanban-title">
                    Kanban Board
                </h1>

                <div className="kanban-wrapper">
                    <KanbanBoard />
                </div>

            </div>
        </Layout>
    );
}

export default Kanban;