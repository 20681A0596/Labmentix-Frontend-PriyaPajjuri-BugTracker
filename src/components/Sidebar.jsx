import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">





                <Link to="/dashboard">
                    Dashboard
                </Link>

                <Link to="/projects">
                    Projects
                </Link>

                <Link to="/issues">
                    Issues
                </Link>

                <Link to="/kanban">
                    Kanban
                </Link>

                <Link to="/comments">
                    Comments
                </Link>

              <Link to="/fileupload">
                    FileUpload
                </Link>

                 <Link to="/profile">
                    Profile
                </Link>



        </div>
    );
}

export default Sidebar;