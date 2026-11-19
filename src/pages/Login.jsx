import { Link, useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const loginUser = () => {

        localStorage.setItem(
            "token",
            "demoToken"
        );

        localStorage.setItem(
            "role",
            "ADMIN"
        );

        navigate("/dashboard");
    };

    return (
        <div className="auth-container">

            <form className="auth-form">

                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <button
                    type="button"
                    onClick={() => navigate("/dashboard")}
                >
                    Login
                </button>

                <p className="auth-link-text">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="auth-link"
                    >
                        Register
                    </Link>
                </p>

            </form>

        </div>
    );
}

export default Login;