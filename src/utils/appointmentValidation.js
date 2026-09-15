const PHONE_REGEX = /^05\d{8}$/;

const MIN_TIME = "09:00";
const MAX_TIME = "17:00";

export function validateAppointment(formData, t) {
    const errors = {};

    const firstName = formData.firstName?.trim();
    const lastName = formData.lastName?.trim();
    const phone = formData.phone?.trim();

    if (!firstName || firstName.length < 2) {
        errors.firstName = t("appointment.firstNameError");
    }

    if (!lastName || lastName.length < 2) {
        errors.lastName = t("appointment.lastNameError");
    }

    if (!phone || !PHONE_REGEX.test(phone)) {
        errors.phone = t("appointment.phoneError");
    }

    if (!formData.date) {
        errors.date = t("appointment.dateError");
    }

    if (!formData.time || formData.time < MIN_TIME || formData.time > MAX_TIME) {
        errors.time = t("appointment.timeError");
    }

    if (!formData.service) {
        errors.service = t("appointment.serviceError");
    }

    return errors;
}