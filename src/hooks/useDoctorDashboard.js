import { useEffect, useState } from "react";

import {
    getDoctorsAppointments,
    updateAppointmentStatus
} from "../services/api";

import { getToken } from "../utils/auth";


function useDoctorDashboard() {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");
    const [updateError, setUpdateError] = useState("");


    useEffect(() => {

        const token = getToken();

        if (!token) {
            setLoadError("You are not logged in");
            setLoading(false);
            return;
        }


        const loadAppointments = async () => {

            try {

                const appointmentsData =
                    await getDoctorsAppointments(token);

                setAppointments(appointmentsData);

            } catch (error) {

                console.error(error);

                setLoadError("Unable to load appointments");

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

        const token = getToken();

        if (!token) {
            setUpdateError("You are not logged in");
            return;
        }

        try {

            setUpdateError("");

            const updatedAppointment =
                await updateAppointmentStatus(
                    appointmentId,
                    newStatus,
                    token
                );


            setAppointments(prevAppointments =>
                prevAppointments.map(appointment =>
                    appointment.appointmentId === appointmentId
                        ? {
                            ...appointment,
                            status: updatedAppointment.status
                        }
                        : appointment
                )
            );

        } catch (error) {

            console.error(error);

            setUpdateError(
                "Unable to update appointment status"
            );
        }
    };


    const upcomingAppointments =
        appointments
            .filter(
                appointment =>
                    appointment.status !== "COMPLETED"
            )
            .slice(0, 5);


    return {
        appointments,
        upcomingAppointments,
        loading,
        loadError,
        updateError,
        handleStatusChange
    };
}


export default useDoctorDashboard;