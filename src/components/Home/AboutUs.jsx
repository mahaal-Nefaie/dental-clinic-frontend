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
        <section id="about" className="about">

            <div className="about__image">
                <img
                    src={clinicIn}
                    alt={t("about.title")}
                />
            </div>

            <div className="about__content">

                <span className="about__subtitle">
                    {t("about.subtitle")}
                </span>

                <h2>
                    {t("about.title")}
                </h2>

                <p>
                    {t("about.description")}
                </p>

                <div className="about__info">

                    <div>
                        <h3>
                            {t("about.missionTitle")}
                        </h3>

                        <p>
                            {t("about.mission")}
                        </p>
                    </div>

                    <div>
                        <h3>
                            {t("about.visionTitle")}
                        </h3>

                        <p>
                            {t("about.vision")}
                        </p>
                    </div>

                </div>


                <div className="about__stats">

                    <Cards
                        icon={<FaStar />}
                        title="4.9/5"
                        paragraph={t("about.stats.rating")}
                    />

                    <Cards
                        icon={<FaUserMd />}
                        title="12+"
                        paragraph={t("about.stats.doctors")}
                    />

                    <Cards
                        icon={<FaTooth />}
                        title="25+"
                        paragraph={t("about.stats.services")}
                    />

                    <Cards
                        icon={<FaAward />}
                        title="18+"
                        paragraph={t("about.stats.certificates")}
                    />

                </div>

            </div>

        </section>
    );
}

export default AboutUs;