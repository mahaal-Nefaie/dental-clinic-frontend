import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { bookAppointment } from "../services/appointmentService";
import { validateAppointment } from "../utils/appointmentValidation";

const initialFormData = {
    firstName: "",
    lastName: "",
    phone: "",
    date: "",
    service: "",
    time: "",
    notes: ""
};

const MIN_TIME = "09:00";
const MAX_TIME = "17:00";

export function useAppointmentForm() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const today = new Date();

    const minDate = today.toISOString().split("T")[0];
    const maxDate = `${today.getFullYear()}-12-31`;

   const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value
    }));

    setErrors((prev) => {
        if (!prev[name]) return prev;

        const newErrors = { ...prev };
        delete newErrors[name];

        return newErrors;
    });
};

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateAppointment(formData, t);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setMessage(null);
        setIsSubmitting(true);

        try {
            await bookAppointment(formData);

            setMessage({
                type: "success",
                text: t("appointment.successMessage")
            });

            setFormData(initialFormData);

        } catch (error) {
            console.error("Error creating appointment:", error);

            setMessage({
                type: "error",
                text:
                    error.status === 409
                        ? t("appointment.timeSlotTaken")
                        : t("appointment.errorMessage")
            });

        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            setMessage(null);
        }, 10000);

        return () => clearTimeout(timer);
    }, [message]);

    return {
        formData,
        errors,
        message,
        isSubmitting,
        minDate,
        maxDate,
        minTime: MIN_TIME,
        maxTime: MAX_TIME,
        handleChange,
        handleSubmit
    };
}