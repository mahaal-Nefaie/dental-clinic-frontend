import { useTranslation } from "react-i18next";
import "./Form.css";

import Button from "../Common/Button";
import Input from "../Common/Input";
import FieldError from "../Common/FieldError";
import AlertMessage from "../Common/AlertMessage";

import { useAppointmentForm } from "../../hooks/useAppointmentForm";

function Form() {
    const { t } = useTranslation();

    const {
        formData,
        errors,
        message,
        isSubmitting,
        minDate,
        maxDate,
        minTime,
        maxTime,
        handleChange,
        handleSubmit
    } = useAppointmentForm();

    return (
        <section id="appointment" className="appointment">
            {message && (
                <AlertMessage
                    message={message.text}
                    type={message.type}
                />
            )}

            <div className="form-container">
                <h2>{t("appointment.title")}</h2>
                <p>{t("appointment.description")}</p>

                <form onSubmit={handleSubmit}>
                    <Input
                        name="firstName"
                        type="text"
                        placeholder={t("appointment.firstName")}
                        formData={formData}
                        handleChange={handleChange}
                        minLength={2}
                        maxLength={50}
                    />

                    <FieldError message={errors.firstName} />

                    <Input
                        name="lastName"
                        type="text"
                        placeholder={t("appointment.lastName")}
                        formData={formData}
                        handleChange={handleChange}
                        minLength={2}
                        maxLength={50}
                    />

                    <FieldError message={errors.lastName} />

                    <Input
                        name="phone"
                        type="tel"
                        placeholder={t("appointment.phone")}
                        formData={formData}
                        handleChange={handleChange}
                    />

                    <FieldError message={errors.phone}/>

                    <Input
                        name="date"
                        type="date"
                        formData={formData}
                        handleChange={handleChange}
                        min={minDate}
                        max={maxDate}
                    />

                    <FieldError message={errors.date} />

                    <Input
                        name="time"
                        type="time"
                        formData={formData}
                        handleChange={handleChange}
                        min={minTime}
                        max={maxTime}
                    />

                    <FieldError message={errors.time} />

                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                    >
                        <option value="">
                            {t("appointment.select")}
                        </option>

                        <option value="1">
                            {t("services.implants.title")}
                        </option>

                        <option value="2">
                            {t("services.cleaning.title")}
                        </option>

                        <option value="3">
                            {t("services.generalDentistry.title")}
                        </option>

                        <option value="4">
                            {t("services.orthodontics.title")}
                        </option>

                        <option value="5">
                            {t("services.rootCanal.title")}
                        </option>

                        <option value="6">
                            {t("services.children.title")}
                        </option>
                    </select>

                    <FieldError message={errors.service} />

                    <Input
                        name="notes"
                        type="text"
                        placeholder={t("appointment.notes")}
                        formData={formData}
                        handleChange={handleChange}
                         required={false}

                    />

                    <Button disabled={isSubmitting}>
                        {isSubmitting
                            ? t("appointment.loading")
                            : t("hero.bookAppointment")}
                    </Button>
                </form>
            </div>
        </section>
    );
}
export default Form;