import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;