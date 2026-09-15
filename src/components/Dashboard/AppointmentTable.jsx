import {
    CalendarDays,
    Clock3
} from "lucide-react";
import "./AppointmentTable.css";


function AppointmentTable({
    appointments,
    onStatusChange
}) {

    return (
        <div className="appointment-table-container">

            {appointments.length === 0 ? (

                <div className="empty-appointments">

                    <CalendarDays size={32} />

                    <h3>No appointments found</h3>

                    <p>
                        You don't have any upcoming appointments.
                    </p>

                </div>

            ) : (

                <table className="appointment-table">

                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Patient</th>
                            <th>Phone</th>
                            <th>Service</th>
                            <th>Notes</th>
                            <th>Status</th>
                        </tr>
                    </thead>


                    <tbody>

                        {appointments.map((appointment) => (

                            <tr key={appointment.appointmentId}>

                                <td>
                                    <div className="table-date">
                                        <CalendarDays size={15} />
                                        {appointment.date}
                                    </div>
                                </td>


                                <td>
                                    <div className="table-time">
                                        <Clock3 size={15} />
                                        {appointment.time}
                                    </div>
                                </td>


                                <td>
                                    <div className="patient-name">
                                        {appointment.patient?.name || "—"}
                                    </div>
                                </td>


                                <td>
                                    {appointment.patient?.phone || "—"}
                                </td>


                                <td>
                                    <div className="service-name">
                                        {appointment.services
                                            ?.map(service => service.name)
                                            .join(", ") || "—"}
                                    </div>
                                </td>

                                <td>
                                    {appointment.notes || "—"}
                                </td>


                                <td>

                                    <select
                                        className={`status-select ${appointment.status.toLowerCase()}`}
                                        value={appointment.status}
                                        onChange={(e) =>
                                            onStatusChange(
                                                appointment.appointmentId,
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option value="PENDING">
                                            Pending
                                        </option>

                                        <option value="CONFIRMED">
                                            Confirmed
                                        </option>

                                        <option value="COMPLETED">
                                            Completed
                                        </option>

                                        <option value="CANCELLED">
                                            Cancelled
                                        </option>

                                    </select>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>
    );
}

export default AppointmentTable;