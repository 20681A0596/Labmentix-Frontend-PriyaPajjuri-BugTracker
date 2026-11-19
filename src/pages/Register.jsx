import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        role: "DEVELOPER"
    });

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(form);
        alert("Registration Sucessful");

        navigate("/");
    };


    return (
        <div className="auth-container">

            <form
                className="auth-form"
                onSubmit={submitHandler}
            >

                <h2>Register</h2>

                <input
                    type="text"
                    placeholder="Username"
                    required
                    onChange={(e) =>
                        setForm({
                            ...form,
                            username: e.target.value
                        })
                    }
                />

                <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value
                        })
                    }
                />

                <select
                    onChange={(e) =>
                        setForm({
                            ...form,
                            role: e.target.value
                        })
                    }
                >
                    <option value="ADMIN">
                        ADMIN
                    </option>

                    <option value="MANAGER">
                        MANAGER
                    </option>

                    <option value="DEVELOPER">
                        DEVELOPER
                    </option>

                </select>

                <button type="submit">
                    Register
                </button>

            </form>

        </div>
    );
}

export default Register;