import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import Navbar from "../Pages/Home/Shared/Footer/Navbar/Navbar";


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

Layout.propTypes = {
    
};

export default Layout;