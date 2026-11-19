import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {

    return (

        <div>

            {<Navbar/>}

            <div className="layout">

                <Sidebar />

                <div className="content">
                    {children}
                </div>

            </div>

        </div>
    );
}

export default Layout;