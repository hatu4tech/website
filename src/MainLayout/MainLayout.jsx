import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import SolutionsPage from "../Pages/Solutions/Solutions";
import About from "../Pages/About/about";
import UnderConstruction from "../Pages/UnderConstruction/UnderConstruction";
import { SITE_UNDER_CONSTRUCTION } from "../config";

const MainLayout = () => {
    return (
        <BrowserRouter>
            {SITE_UNDER_CONSTRUCTION ? (
                //If flag is ON, show Under Construction
                <Routes>
                    <Route path="*" element={<UnderConstruction />} />
                </Routes>
            ) : (
                //Otherwise, show your normal routes
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/solutions" element={<SolutionsPage />} />
                    {/* not found routes  */}
                    <Route path="*" element={<Error />} />
                </Routes>
            )}
        </BrowserRouter>
    );
};

export default MainLayout;
