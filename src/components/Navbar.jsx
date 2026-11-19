

function Navbar() {

    const role =
        localStorage.getItem("role") || "Guest";

    return (
        <div className="navbar">

            <div className="navbar-left">
                <h2>🐞 Bug Tracker</h2>
            </div>

           <div className="navbar-right">
        <span className="user-role">
          {role}
        </span>

            </div>

        </div>
    );
}

export default Navbar;