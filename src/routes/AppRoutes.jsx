import {
    Routes,
    Route
} from "react-router-dom";
import {Navigate} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Issues from "../pages/Issues";
import Kanban from "../pages/Kanban";
import UserManagement from "../pages/UserManagement";
import IssueDetails from "../pages/IssueDetails";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../components/NotFound.jsx";

function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />
            <Route
                path="/"
                element={<Navigate to="/login" />}
            />

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

            <Route
                path="/projects"
                element={<Projects />}
            />

            <Route
                path="/project/:id"
                element={<ProjectDetails />}
            />

            <Route
                path="/issues"
                element={<Issues />}
            />

            <Route
                path="/issue/:id"
                element={<IssueDetails />}
            />

            <Route
                path="/kanban"
                element={<Kanban />}
            />

            <Route
                path="/users"
                element={<UserManagement />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
}

export default AppRoutes;