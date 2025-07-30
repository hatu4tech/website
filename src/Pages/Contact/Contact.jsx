import Navigation from "../../Components/navigation/navigation.jsx";
import ContactPage from "../../Components/contactComponents/ContactPage/contact.jsx";
import Footer from "../../Components/homeComponents/FooterSection/footer.jsx";


const Contact = () => {
    return (
        <div>

            {/* navigation component  */}
            <div className="w-full">
                <Navigation></Navigation>
            </div>


            {/* contact page component  */}
            <div className="w-full">
                <ContactPage></ContactPage>
            </div>

            {/* footer component  */}
            <div className="w-full">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Contact;