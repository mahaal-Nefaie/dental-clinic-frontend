function TodayAppointments({ appointments, onStatusChange }) {

    const todayAppointments = appointments.slice(0, 5);

    return (
        <section className="dashboard-section">

            <div className="section-header">
                <div>
                    <h2>Today's Appointments</h2>
                    <p>Upcoming appointments</p>
                </div>

                <NavLink to="/doctor/appointments">
                    View All
                </NavLink>
            </div>

            <AppointmentTable
                appointments={todayAppointments}
                onStatusChange={onStatusChange}
            />

        </section>
    );
}