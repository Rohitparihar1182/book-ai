import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import ImageSection from "../components/ImageSection";
import Newsletter from "../components/Newsletter";
import Roadmap from "../components/Roadmap";
import SampleBooks from "../components/SampleBooks";
import Testimonials from "../components/Testimonials";

const Home = () => {

    return (
        <div className="">
            <Header />
            <Banner />
            <ImageSection />
            <Features />
            <HowItWorks />
            <SampleBooks />
            <Roadmap />
            <Testimonials />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home;