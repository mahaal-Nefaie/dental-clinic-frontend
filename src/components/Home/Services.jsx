import { useTranslation } from "react-i18next";
import Cards from "../Common/Cards";
import "../Common/Cards.css";
import { FaTooth } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { FaTeeth } from "react-icons/fa";
import { GiTooth } from "react-icons/gi";
import { FaChild } from "react-icons/fa";
import "./Hero.css";

function Services() {

    const { t } = useTranslation();


    return (
        <>
            <div id="services"
            className="service">
                <span className="service__subtitle">
                    {t("services.subtitle")}
                </span>
            </div>

            <div className="cards-container">

                <Cards
                    icon={<FaTooth />}
                    title={t("services.implants.title")}
                    paragraph={t("services.implants.description")}
                />


                <Cards
                    icon={<GiToothbrush />}
                    title={t("services.cleaning.title")}
                    paragraph={t("services.cleaning.description")}
                />


                <Cards
                    icon={<MdCleaningServices />}
                    title={t("services.cosmetic.title")}
                    paragraph={t("services.cosmetic.description")}
                />

                <Cards
                    icon={<FaTeeth />}
                    title={t("services.orthodontics.title")}
                    paragraph={t("services.orthodontics.description")}
                />
                <Cards
                    icon={<GiTooth />}
                    title={t("services.rootCanal.title")}
                    paragraph={t("services.rootCanal.description")}
                />


                <Cards
                    icon={<FaChild />}
                    title={t("services.children.title")}
                    paragraph={t("services.children.description")}
                />

            </div>
        </>

    )
}

export default Services;