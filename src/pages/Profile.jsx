import Layout from "../components/Layout.jsx";

function Profile() {



    return (
        <Layout>

            <div className="profile-container">

                <div className="profile-card">

                    <div className="profile-avatar">
                        PP
                    </div>

                    <h2>
                        Priya Pajjuri
                    </h2>

                    <div className="profile-info">

                        <p>
                            <span>Role:</span> Developer
                        </p>

                        <p>
                            <span>Projects:</span> 5
                        </p>

                        <p>
                            <span>Assigned Issues:</span> 3
                        </p>

                        <p>
                            <span>Email:</span> priya@example.com
                        </p>

                    </div>

                </div>

            </div>

        </Layout>
    );
}

export default Profile;



