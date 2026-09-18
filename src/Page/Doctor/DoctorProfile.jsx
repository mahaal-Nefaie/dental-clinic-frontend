import "./DoctorPages.css";
import useDoctorProfile from "../../hooks/useDoctorProfile";

function DoctorProfile() {
    const { doctor, loading, error } = useDoctorProfile();

    if (loading) {
        return (
            <div className="simple-page">
                <div className="page-title">
                    <h2>Loading...</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="simple-page">
                <div className="page-title">
                    <h2>Error</h2>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    if (!doctor) {
        return (
            <div className="simple-page">
                <div className="page-title">
                    <h2>No doctor data found</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="simple-page">
            <div className="page-title">
                <h2>Profile</h2>

                <p>
                    Manage your personal and professional information.
                </p>

                <h2>{doctor.name}</h2>

                <p>
                    Specialization: {doctor.specialization}
                </p>

                <p>
                    Email: {doctor.email}
                </p>

                <p>
                    Phone: {doctor.phone}</p>
            </div>
        </div>
    );
}

export default DoctorProfile;