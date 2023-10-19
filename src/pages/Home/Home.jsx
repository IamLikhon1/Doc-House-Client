import Banner from "./Banner";
import Contact from "./Contact";
import Expert from "./Expert/Expert";
import Information from "./Information";
import Services from "./Services/Services";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Information/>
            <Testimonial/>
            <Expert/>
            <Contact/>
        </div>
    );
};

export default Home;