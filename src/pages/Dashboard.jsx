import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";
function Dashboard() {

    let projects = [];
    let issues = [];

    try {
        projects = JSON.parse(
            localStorage.getItem("projects") || "[]"
        );
    } catch {
        projects = [];
    }

    try {
        issues = JSON.parse(
            localStorage.getItem("issues") || "[]"
        );
    } catch {
        issues = [];
    }

    const totalProjects = projects.length;

    const totalIssues = issues.length;



    return (
        <Layout>

            <div className="dashboard-container">

                <h1 className="dashboard-title">
                    WELCOME TO THE BUGTRACKER DASHBOARD
                </h1>

                <div className="dashboard-grid">

                    <DashboardCard
                        title="Total Projects"
                        count={totalProjects}
                        color="#2563eb"
                    />

                    <DashboardCard
                        title="Total Issues"
                        count={totalIssues}
                        color="#f59e0b"
                    />



                </div>

            </div>

        </Layout>
    );
}

export default Dashboard;