import Header from "../components/layout/Header";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Form from "../components/Home/Form";
import MapSection from "../components/Home/MapSection";
import Footer from "../components/layout/Footer";
import AboutUs from "../components/Home/AboutUs";
import ScrollToTop from "../components/Common/ScrollToTop";
import "../styles/Home.css";


function Home() {

    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <Services />
            <Form />
            <MapSection />
            <ScrollToTop />
            <Footer />

        </>
    )
}

export default Home;