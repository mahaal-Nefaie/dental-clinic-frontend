import "./Footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaWhatsapp,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";


function Footer() {

    const { t } = useTranslation();


    return (
        <footer className="footer">

            <div className="footer-container">



                <div className="footer-box">

                    <h2 className="logo">
                        {t("footer.clinicName")}
                    </h2>

                    <p>
                        {t("footer.description")}
                    </p>


                    <div className="social-icons">

                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaWhatsapp /></a>

                    </div>

                </div>





                <div className="footer-box">

                    <h3>
                        {t("footer.quickLinks")}
                    </h3>


                    <ul>

                        <li>{t("footer.home")}</li>

                        <li>{t("footer.about")}</li>

                        <li>{t("footer.services")}</li>

                        <li>{t("footer.doctors")}</li>

                        <li>{t("footer.appointment")}</li>

                        <li>{t("footer.contact")}</li>

                    </ul>

                </div>





                <div className="footer-box">

                    <h3>
                        {t("footer.ourServices")}
                    </h3>


                    <ul>

                        <li>{t("footer.implants")}</li>

                        <li>{t("footer.cleaning")}</li>

                        <li>{t("footer.cosmetic")}</li>

                        <li>{t("footer.orthodontics")}</li>

                        <li>{t("footer.rootCanal")}</li>

                    </ul>


                </div>






                <div className="footer-box">


                    <h3>
                        {t("footer.contactUs")}
                    </h3>



                    <div className="contact-item">

                        <FaPhone />

                        <span>
                            {t("footer.phone")}
                        </span>

                    </div>



                    <div className="contact-item">

                        <FaEnvelope />

                        <span>
                            {t("footer.email")}
                        </span>

                    </div>



                    <div className="contact-item">

                        <FaMapMarkerAlt />

                        <span>
                            {t("footer.address")}
                        </span>

                    </div>



                </div>


            </div>




            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} {t("footer.clinicName")} - {t("footer.copyright")}
                </p>

            </div>



        </footer>
    );
}


export default Footer;