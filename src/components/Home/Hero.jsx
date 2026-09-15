import clinic from "../../assets/images/clinic.jpg";
import "./Hero.css";
import { useTranslation } from "react-i18next";
import Button from "../Common/Button";

function Hero() {
    const { t } = useTranslation();
    return (
        <section id="home"
            className="hero">
            <div className="hero-container">

                <div className="hero-content">
                    <h1>{t("hero.title")}</h1>

                    <p>{t("hero.description")}</p>


                    <div className="hero-buttons">
                        <a href="#appointment">
                            <Button>{t("hero.bookAppointment")}</Button>
                        </a>

                        <a href="#services">
                            <Button className="secondary-btn">{t("hero.ourServices")}</Button>
                        </a>
                    </div>
                </div>

                <div className="hero-img">
                    <div className="circle"></div>

                    <img
                        src={clinic}
                        alt="Doctor"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;