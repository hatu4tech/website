import { BrowserRouter, Route, Routes } from "react-router";

import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Error from "../Pages/Error/Error";
import AuthCheck from "../AuthCheck/AuthCheck";




const MainLayout = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <AuthCheck>
                        <Home/>
                    </AuthCheck>
                } />
                <Route path="auth" element={<Auth/>}>
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>
                {/* not found routes  */}
                <Route path="*" element={<Error/> } />
            </Routes>

        </BrowserRouter>
    );
};

export default MainLayout;