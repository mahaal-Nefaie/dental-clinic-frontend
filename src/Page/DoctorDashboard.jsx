import { Link } from "react-router-dom";
import StatusCards from "../components/Dashboard/StatusCards";
import AppointmentTable from "../components/Dashboard/AppointmentTable";
import useDoctorDashboard from "../hooks/useDoctorDashboard";
import {
    CalendarDays,
    Clock3,
    UserRound,
    ArrowUpRight
} from "lucide-react";


import "./DoctorDashboard.css";

function DoctorDashboard() {

    const {
        appointments,
        upcomingAppointments,
        loading,
        loadError,
        updateError,
        handleStatusChange
    } = useDoctorDashboard();



    if (loading) {
        return (
            <div className="dashboard-loading">
                Loading dashboard...
            </div>
        );
    }


    if (loadError) {
        return (
            <div className="dashboard-error">
                {loadError}
            </div>
        );
    }



    return (
        <div className="dashboard-page">

            <StatusCards
                appointments={appointments}
            />

            {updateError && (
                <div className="dashboard-error">
                    {updateError}
                </div>
            )}


            <section className="dashboard-section">

                <div className="section-header">

                    <div>
                        <h2>Upcoming Appointments</h2>

                        <p>
                            Your next scheduled appointments
                        </p>
                    </div>


                    <Link
                        to="/doctor/appointments"
                        className="view-all-link"
                    >
                        View all
                    </Link>

                </div>


                <AppointmentTable
                    appointments={upcomingAppointments}
                    onStatusChange={handleStatusChange}
                />


            </section>

            <section className="quick-actions">

                <div className="section-header">
                    <div>
                        <h2>Quick Actions</h2>
                        <p>Quick access to your most used tools</p>
                    </div>
                </div>


                <div className="quick-actions-grid">

                    <Link to="/doctor/appointments">

                        <div className="quick-action-icon blue">
                            <CalendarDays size={20} />
                        </div>

                        <div className="quick-action-content">
                            <strong>Appointments</strong>
                            <span>View and manage appointments</span>
                        </div>

                        <ArrowUpRight
                            className="quick-action-arrow"
                            size={18}
                        />

                    </Link>


                    <Link to="/doctor/schedule">

                        <div className="quick-action-icon green">
                            <Clock3 size={20} />
                        </div>

                        <div className="quick-action-content">
                            <strong>Schedule</strong>
                            <span>Manage your availability</span>
                        </div>

                        <ArrowUpRight
                            className="quick-action-arrow"
                            size={18}
                        />

                    </Link>


                    <Link to="/doctor/profile">

                        <div className="quick-action-icon purple">
                            <UserRound size={20} />
                        </div>

                        <div className="quick-action-content">
                            <strong>Profile</strong>
                            <span>Update your information</span>
                        </div>

                        <ArrowUpRight
                            className="quick-action-arrow"
                            size={18}
                        />

                    </Link>

                </div>

            </section>


        </div>
    );
}

export default DoctorDashboard;