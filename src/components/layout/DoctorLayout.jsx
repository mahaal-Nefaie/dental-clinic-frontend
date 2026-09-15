import { Outlet } from "react-router-dom";

import Sidebar from "../Dashboard/Sidebar";
import Header from "../Dashboard/Header";

import "./DoctorLayout.css";

function DoctorLayout() {

    return (
        <div className="doctor-portal">

            <Sidebar />

            <div className="doctor-content">

                <Header />

                <main className="doctor-main">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}

export default DoctorLayout;