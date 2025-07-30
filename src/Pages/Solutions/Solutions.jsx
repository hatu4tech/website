import Navigation from "../../Components/navigation/navigation.jsx";
import Footer from "../../Components/homeComponents/FooterSection/footer.jsx";
import Solutions from "../../Components/solutionsComponents/solution.jsx";


const SolutionsPage = () => {
    return (
        <div>

            {/* navigation component  */}
            <div className="w-full">
                <Navigation></Navigation>
            </div>


            {/* about page component  */}
            <div className="w-full">
                <Solutions></Solutions>
            </div>

            {/* footer component  */}
            <div className="w-full">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default SolutionsPage;