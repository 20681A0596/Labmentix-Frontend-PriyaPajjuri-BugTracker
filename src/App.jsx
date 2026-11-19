import {
    BrowserRouter,
    Routes,
    Route
}
    from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import Projects from "./pages/Projects";
import Issues from "./pages/Issues";
import Kanban from "./pages/Kanban";
import Comments from "./pages/Comments";
import FileUpload from "./pages/FileUpload.jsx";
import Profile from "./pages/Profile";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route path="/projects" element={<Projects />} />
                <Route path="/issues" element={<Issues />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/fileupload" element={<FileUpload />} />
                <Route path="/profile" element={<Profile />} />

            </Routes>

        </BrowserRouter>

    );
}

export default App;




