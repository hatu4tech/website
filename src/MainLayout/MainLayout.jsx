import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import SolutionsPage from "../Pages/Solutions/Solutions";
import About from "../Pages/About/about";


const MainLayout = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                        <Home/>
                } />
                
                <Route path="/contact" element={
                        <Contact/>
                }/>

                <Route path="/about" element={
                    <About />
                } />
                
                <Route path="/solutions" element={
                    <SolutionsPage />
                } />

                {/* not found routes  */}
                <Route path="*" element={<Error/> } />
            </Routes>

        </BrowserRouter>
    );
};

export default MainLayout;