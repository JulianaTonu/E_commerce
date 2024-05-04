import { FaAddressBook, FaList, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const isAdmin = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-100">
                <ul className="menu p-4">
                    
                    
                {
    isAdmin ? <>
    <li className="hover:text-orange-500"><NavLink to='adminHome'>
                        <FaUser></FaUser>
                        Admin Home</NavLink>
                    </li>
                    <li className="hover:text-orange-500">
                        <NavLink to='dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        My Cart</NavLink>
                    </li>
                    <li className="hover:text-orange-500"
                    ><NavLink to='adaItems'>
                        <FaList></FaList>
                       Add Items</NavLink>
                    </li>   
                    <li className="hover:text-orange-500 "
                    ><NavLink to='manageBookings'>
                        <FaAddressBook></FaAddressBook>
                       Manage Bookings</NavLink>
                    </li>          
                    <li className="hover:text-orange-500 "
                    ><NavLink to='allUsers'>
                        <FaUsers></FaUsers>
                       All Users</NavLink>
                    </li>
    </> 

    :
    <>
    <li><NavLink to='dashboard/home'>
                        <FaUser></FaUser>
                        User Home</NavLink>
                    </li>
                    <li><NavLink to='dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        My Cart</NavLink>
                    </li>
               
                    <li><NavLink to='dashboard/cart'>
                        <FaAddressBook></FaAddressBook>
                       Add a Review</NavLink>
                    </li>
               
                    <li><NavLink to='dashboard/booking'>
                        <FaList></FaList>
                       My Bookings</NavLink>
                    </li>
    </>
}


                    <div className="divider"></div>

                    <li><NavLink to='/'>
                        <FaUser></FaUser>
                        Home</NavLink>
                    </li>
                    <li><NavLink to='/items'>
                        <FaUser></FaUser>
                       Items</NavLink>
                    </li>
                    </ul>
            </div>

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;