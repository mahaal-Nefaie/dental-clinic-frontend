import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    CalendarDays,
    Clock3,
    UserRound
} from "lucide-react";

import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="dashboard-sidebar">

            <div className="sidebar-logo">
                <h2>SmileCare Clinic</h2>
                <span>Doctor Portal</span>
            </div>

            <nav className="nav-dashboard">

                <NavLink to="/doctor/dashboard">
                    <LayoutDashboard className="nav-icon" size={20} />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/doctor/appointments">
                    <CalendarDays className="nav-icon" size={20} />
                    <span>Appointments</span>
                </NavLink>

                <NavLink to="/doctor/schedule">
                    <Clock3 className="nav-icon" size={20} />
                    <span>Schedule</span>
                </NavLink>

                <NavLink to="/doctor/profile">
                    <UserRound className="nav-icon" size={20} />
                    <span>Profile</span>
                </NavLink>

            </nav>

            <div className="sidebar-bottom">

                <div className="sidebar-help">
                    <span>Need help?</span>
                    <small>Contact clinic support</small>
                </div>

            </div>

        </aside>
    );
}

export default Sidebar;