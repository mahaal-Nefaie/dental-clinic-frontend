import { useEffect, useState } from "react";
import { getCurrentDoctor } from "../services/api";
import { getToken } from "../utils/auth";

function useDoctorProfile() {
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const token = getToken();

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

    return {
        doctor,
        loading,
        error,
    };
}

export default useDoctorProfile;