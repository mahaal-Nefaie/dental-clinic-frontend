import { useEffect, useState } from "react";
import "./DoctorPages.css";

import {
    getCurrentDoctor,
} from "../../services/api";


function DoctorProfile() {
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    throw new Error("No token found");
                }

                const doctorData = await getCurrentDoctor(token);

                console.log("Doctor Data:", doctorData);

                setDoctor(doctorData);
            } catch (error) {
                console.error("Error fetching doctor data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctor();
    }, []);

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
                    Phone: {doctor.phone}
                </p>

            </div>

        </div>
    );
}

export default DoctorProfile;