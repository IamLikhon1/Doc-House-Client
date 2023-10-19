import { Outlet } from "react-router-dom";
import NavBar from "../pages/Home/NavBar";
import Footer from "../pages/Home/Footer";

const Main = () => {
    return (
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default Main;