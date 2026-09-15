import {
    createOrGetPatient,
    createAppointment
} from "./api";

export async function bookAppointment(formData) {
    const patient = await createOrGetPatient({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: formData.phone.trim()
    });

    return createAppointment({
        appointmentDate: formData.date,
        appointmentTime: `${formData.time}:00`,
        notes: formData.notes.trim(),
        patientId: patient.patientId,
        serviceIds: [Number(formData.service)]
    });
}