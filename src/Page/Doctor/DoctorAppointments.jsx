import { useEffect, useState } from "react";

import AppointmentTable from "../../components/Dashboard/AppointmentTable";

import {
    getDoctorsAppointments,
    updateAppointmentStatus
} from "../../services/api";

import "./DoctorAppointments.css";

function DoctorAppointments() {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {

        const token = localStorage.getItem("token");

        const loadAppointments = async () => {

            try {

                const data =
                    await getDoctorsAppointments(token);

                setAppointments(data);

            } catch (error) {

                console.error(error);

                setError(
                    "Unable to load appointments"
                );

            } finally {

                setLoading(false);

            }
        };

        loadAppointments();

    }, []);


    const handleStatusChange = async (
        appointmentId,
        newStatus
    ) => {

        const token = localStorage.getItem("token");

        try {

            const updated =
                await updateAppointmentStatus(
                    appointmentId,
                    newStatus,
                    token
                );


            setAppointments(prev =>
                prev.map(appointment =>
                    appointment.appointmentId === appointmentId
                        ? {
                            ...appointment,
                            status: updated.status
                        }
                        : appointment
                )
            );

        } catch (error) {

            console.error(error);

            setError(
                "Unable to update appointment"
            );
        }
    };


    return (
        <div className="appointments-page">

            <div className="page-title">

                <div>
                    <h2>Appointments</h2>

                    <p>
                        View and manage all your appointments
                    </p>
                </div>

            </div>


            {loading && (
                <p>Loading appointments...</p>
            )}


            {error && (
                <div className="dashboard-error">
                    {error}
                </div>
            )}


            {!loading && !error && (

                <div className="appointments-card">

                    <AppointmentTable
                        appointments={appointments}
                        onStatusChange={handleStatusChange}
                    />

                </div>

            )}

        </div>
    );
}

export default DoctorAppointments;