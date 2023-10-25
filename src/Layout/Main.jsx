import { Outlet } from "react-router-dom";
import NavBar from "../pages/Home/NavBar";
import Footer from "../pages/Home/Footer";
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <>
        {/* <NavBar/> */}
        <Outlet/>
        <Footer/>
        <Toaster/>
        </>
    );
};

export default Main;