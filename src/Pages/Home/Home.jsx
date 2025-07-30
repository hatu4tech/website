import Banner from "../../Components/homeComponents/Banner/Banner.jsx";
import Navigation from "../../Components/navigation/navigation.jsx";
import Solutions from "../../Components/homeComponents/app_solutions/solutions.jsx";
import About from "../../Components/homeComponents/AboutPage/aboutpage.jsx";
import Footer from "../../Components/homeComponents/FooterSection/footer.jsx";
import Features from "../../Components/homeComponents/features/features.jsx";
import HatuaTechHomepage from "../../Components/demo/demo.jsx"; // Importing the demo component

const Home = () => {
    return (
        <div>

            {/* <div className="w-full">
                <HatuaTechHomepage></HatuaTechHomepage>
            </div> */}

            <div className="w-full">
                <Navigation></Navigation>
            </div>

             <div className="w-full">
                <Banner></Banner>
            </div>

             <div className="w-full">
                <Features></Features>
            </div>

             <div className="w-full">
                <Solutions></Solutions>
            </div>

            <div className="w-full">
                <About></About>
            </div>

             <div className="w-full">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;