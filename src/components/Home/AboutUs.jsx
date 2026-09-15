import "./AboutUs.css";
import {
    FaStar,
    FaUserMd,
    FaTooth,
    FaAward,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import clinicIn from "../../assets/images/clinicIn.jpg";
import Cards from "../Common/Cards";

function AboutUs() {
    const { t } = useTranslation();

    return (
        <section id="about"
            className="about">
            <div className="about__image">
                <img src={clinicIn} alt={t("about.title")} />
            </div>

            <div className="about__content">
                <span className="about__subtitle">
                    {t("about.subtitle")}
                </span>

                <h2>{t("about.title")}</h2>

                <p>{t("about.description")}</p>

                <div className="about__info">
                    <div>
                        <h3>{t("about.missionTitle")}</h3>
                        <p>{t("about.mission")}</p>
                    </div>

                    <div>
                        <h3>{t("about.visionTitle")}</h3>
                        <p>{t("about.vision")}</p>
                    </div>
                </div>

                <div className="about__stats">
                    <div className="stat">
                        <Cards 
                        icon={<FaStar className="stat__icon" />}
                        title={"4.9/5"}
                        pragraph={t("about.stats.rating")}
                        />
                        {/*
                        <FaStar className="stat__icon" />
                        <h3>4.9/5</h3>
                        <p>{t("about.stats.rating")}</p>
                        */}
                    </div>

                    <div className="stat">
                        <Cards 
                        icon={<FaUserMd className="stat__icon" />}
                        title={"+12"}
                        pragraph={t("about.stats.doctors")}
                        />
                        {/*
                        <FaUserMd className="stat__icon" />
                        <h3>12+</h3>
                        <p>{t("about.stats.doctors")}</p>
                        */}
                    </div>

                    <div className="stat">
                        <FaTooth className="stat__icon" />
                        <h3>25+</h3>
                        <p>{t("about.stats.services")}</p>
                    </div>

                    <div className="stat">
                        <FaAward className="stat__icon" />
                        <h3>18+</h3>
                        <p>{t("about.stats.certificates")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;