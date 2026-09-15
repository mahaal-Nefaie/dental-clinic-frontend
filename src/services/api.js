const API_BASE_URL = "http://localhost:8080/api";

// =========================
// Patient
// =========================

// إنشاء أو جلب المريض
export const createOrGetPatient = async (patientData) => {
    const response = await fetch(`${API_BASE_URL}/patients`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
    });

    if (!response.ok) {
        throw new Error("Failed to process patient");
    }

    return await response.json();
};


// =========================
// Appointments
// =========================

// إنشاء الموعد
export const createAppointment = async (appointmentData) => {
    const response = await fetch(`${API_BASE_URL}/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
    });

    const data = await response.json();

    if (!response.ok) {
        const error = new Error(
            data.message || "Failed to create appointment"
        );

        error.status = response.status;

        throw error;
    }

    return data;
};


// جلب مواعيد الدكتور الحالي
export const getDoctorsAppointments = async (token) => {
    const response = await fetch(
        `${API_BASE_URL}/appointments/my-appointments`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    const text = await response.text();

    if (!response.ok) {
        console.error("APPOINTMENTS API ERROR:", text);
        throw new Error("Failed to fetch appointments");
    }

    console.log("APPOINTMENTS RESPONSE:", text);

    return JSON.parse(text);
};


// تحديث حالة الموعد
export const updateAppointmentStatus = async (
    appointmentId,
    newStatus,
    token
) => {
    const response = await fetch(
        `${API_BASE_URL}/appointments/${appointmentId}/status`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: newStatus,
            }),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update appointment status");
    }

    return await response.json();
};


// =========================
// Doctor
// =========================

// جلب بيانات الدكتور الحالي
export const getCurrentDoctor = async (token) => {
    const response = await fetch(
        `${API_BASE_URL}/doctors/me`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
        const text = await response.text();

        console.error("DOCTOR API ERROR:", text);

        throw new Error("Failed to fetch doctor");
    }

    const doctor = await response.json();

    console.log("CURRENT DOCTOR:", doctor);

    return doctor;
};


// =========================
// Notifications
// =========================

// جلب الإشعارات
export const getNotifications = async (token) => {
    const response = await fetch(
        `${API_BASE_URL}/notifications`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Unable to load notifications");
    }

    return await response.json();
};


// جلب عدد الإشعارات غير المقروءة
export const getUnreadNotificationCount = async (token) => {
    const response = await fetch(
        `${API_BASE_URL}/notifications/unread-count`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Unable to load notification count");
    }

    return await response.json();
};


// تحديد الإشعار كمقروء
export const markNotificationAsRead = async (
    token,
    notificationId
) => {
    const response = await fetch(
        `${API_BASE_URL}/notifications/${notificationId}/read`,
        {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Unable to mark notification as read");
    }
};