import "./MapSection.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function MapSection() {

    const { t } = useTranslation();


    return (
        <section className="map-section">

            <div className="map-container">

                <div className="fake-map">

                    <div className="map-overlay">

                        <FaMapMarkerAlt />

                        <h3>
                            {t("map.title")}
                        </h3>

                        <p>
                            {t("map.description")}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default MapSection;