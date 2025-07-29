import Banner from "../../Components/Banner/Banner";
import Navigation from "../../Components/navigation/navigation.jsx";
import Solutions from "../../Components/app_solutions/solutions.jsx";
import About from "../../Components/About/About.jsx";
import ContactPage from "../../Components/Contact/contact.jsx";
import Footer from "../../Components/footer/footer.jsx";


const Home = () => {
    return (
        <div>

            {/* navigation component  */}
            <div className="w-full">
                <Navigation></Navigation>
            </div>

            {/* banner component  */}
            <div className="w-full">
                <Banner></Banner>
            </div>

            {/* banner component  */}
            <div className="w-full">
                <Solutions></Solutions>
            </div>

            <div className="w-full">
                <About></About>
            </div>

            <div className="w-full">
                <ContactPage></ContactPage>
            </div>


            <div className="w-full">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;