import { Navigate } from "react-router-dom";
import "./ProtectedRoute.css";

function ProtectedRoute({ children }) {

    const token =
        localStorage.getItem("token");

    const loading = false;

    if (loading) {
        return (
            <div className="auth-loading">
                <div className="auth-loading-card">
                    <h2>Bug Tracker</h2>
                    <p>Please wait...</p>
                </div>
            </div>
        );
    }

    return token
        ? children
        : <Navigate to="/" />;
}

export default ProtectedRoute;