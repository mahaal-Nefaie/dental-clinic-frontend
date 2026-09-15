/*import { Routes, Route } from "react-router-dom";

import Home from "../Page/Home";
import Login from "../Page/Login";
import DoctorDashboard from "../Page/DoctorDashboard";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import DoctorAppointments from "../Page/Doctor/DoctorAppointments";
import DoctorSchedule from "../Page/Doctor/DoctorSchedule";
import DoctorProfile from "../Page/Doctor/DoctorProfile";
import DoctorLayout from "../components/layout/DoctorLayout";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
         />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/doctor/dashboard"
        element={
          <ProtectedRoute>
            <DoctorDashboard  />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}*/


import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Page/Home";
import Login from "../Page/Login";

import DoctorDashboard from "../Page/DoctorDashboard";
import DoctorAppointments from "../Page/Doctor/DoctorAppointments";
import DoctorSchedule from "../Page/Doctor/DoctorSchedule";
import DoctorProfile from "../Page/Doctor/DoctorProfile";

import DoctorLayout from "../components/layout/DoctorLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";

export default function AppRoutes() {
    return (
        <Routes>

            {/* Public pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />


            {/* Doctor Portal */}
            <Route
                path="/doctor"
                element={
                    <ProtectedRoute>
                        <DoctorLayout />
                    </ProtectedRoute>
                }
            >

                <Route
                    index
                    element={
                        <Navigate
                            to="/doctor/dashboard"
                            replace
                        />
                    }
                />

                <Route
                    path="dashboard"
                    element={<DoctorDashboard />}
                />

                <Route
                    path="appointments"
                    element={<DoctorAppointments />}
                />

                <Route
                    path="schedule"
                    element={<DoctorSchedule />}
                />

                <Route
                    path="profile"
                    element={<DoctorProfile />}
                />

            </Route>


            {/* Unknown route */}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />

        </Routes>
    );
}