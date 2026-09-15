import "./Header.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

function Header() {

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "ar" ? "en" : "ar";

        i18n.changeLanguage(newLang);
        localStorage.setItem("lang", newLang);
    };


    const [isOpend, setIsOpend] = useState(false);
    return (
        <>
            <header>
                <div className="logo">
                    SmileCare
                </div>

                <div className="language-switch" onClick={toggleLanguage}>
                    <MdLanguage size={22} />
                    <span>{i18n.language === "ar" ? "EN" : "AR"}</span>
                </div>

                <button
                    className="menu-btn"
                    onClick={() => setIsOpend(!isOpend)}
                >
                    <FiMenu />
                </button>

                <nav>
                    <ul className={isOpend ? "nav-links active" : "nav-links"}>
                        <li>
                            <a className="nav-link" href="#home">
                                {t("navbar.home")}
                            </a>
                        </li>

                        <li>
                            <a className="nav-link" href="#about">
                                {t("navbar.about")}
                            </a>
                        </li>

                        <li>
                            <a className="nav-link" href="#services">
                                {t("navbar.services")}
                            </a>
                        </li>

                        <li>
                            <a className="nav-link" href="#appointment">
                                {t("navbar.appointment")}
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>



        </>
    )
}

export default Header;