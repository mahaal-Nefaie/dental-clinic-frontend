import { useEffect, useState } from "react";

import {
    getCurrentDoctor
} from "../../services/api";

import {
    LogOut
} from "lucide-react";

import NotificationDropdown
    from "./NotificationDropdown";

import "./Header.css";


function Header() {

    const [doctorName, setDoctorName] =
        useState("");


    useEffect(() => {

        const token =
            localStorage.getItem("token");

        if (!token) return;


        const loadDoctor = async () => {

            try {

                const doctor =
                    await getCurrentDoctor(token);

                setDoctorName(
                    doctor.name
                );

            } catch (error) {

                console.error(error);

            }

        };


        loadDoctor();

    }, []);


    const handleLogout = () => {

        localStorage.removeItem("token");

        window.location.href =
            "/login";
    };


    return (

        <header className="dashboard-header">

            <div className="header-welcome">

                <span className="header-label">
                    Doctor Portal
                </span>

                <h1>
                    Welcome, Dr. {doctorName}
                </h1>

                <p>
                    Manage your clinic and appointments
                </p>

            </div>


            <div className="header-actions">

                <NotificationDropdown />


                <button
                    className="logout-button"
                    onClick={handleLogout}
                >

                    <LogOut size={17} />

                    <span>
                        Logout
                    </span>

                </button>

            </div>

        </header>
    );
}


export default Header;