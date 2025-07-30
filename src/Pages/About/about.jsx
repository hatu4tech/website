import Navigation from "../../Components/navigation/navigation.jsx";
import AboutPage from "../../Components/aboutComponents/about.jsx";
import Footer from "../../Components/homeComponents/FooterSection/footer.jsx";


const About = () => {
    return (
        <div>

            {/* navigation component  */}
            <div className="w-full">
                <Navigation></Navigation>
            </div>


            {/* about page component  */}
            <div className="w-full">
                <AboutPage></AboutPage>
            </div>

            {/* footer component  */}
            <div className="w-full">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default About;